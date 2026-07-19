import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideo, fetchGifs } from '../Api/mediaApi'
import { setQuery, setActiveTab, setResults, setLoading, setError, clearResults } from '../redux/Features/SearchSlice'
import { useEffect } from 'react'
import ResultCard from './ResultCard'


const ResultGrid = () => {
  const dispatch = useDispatch()
  const { query, activeTab, results, loading, error } = useSelector((Store) => Store.search)

  useEffect(function () {
    const getData = async () => {

      
        try {
        dispatch(setLoading())
        let data = []
        if (activeTab == 'Photos') {
          let response = await fetchPhotos(query)

          data = response.results.map((items) => ({
            id: items.id,
            type: "photo",
            url: items.links.download
          }))
        }
        if (activeTab == 'Videos') {
          let response = await fetchVideo(query)
          data = response.data.videos.map((items) => ({
            id: items.id,
            type: "video",
            url: items.video_files[0].link
          }))
        }
        if (activeTab == 'Gifs') {
          let response = await fetchGifs(query)
          data = response.map((items) => ({
            id: items.id,
            type: "GIF",
            url: items.images.original.url
          }))
        }
        dispatch(setResults(data))
      
      
      } catch (error) {
        dispatch(setError(error.message))
      }
        
     
      
    }
    getData()

  }, [query, activeTab])

  if(error) return <h1 className='text-4xl font-bold m-auto'>Error ,TRY AGAIN......</h1>
  if (loading) return <h1 className='text-4xl font-bold m-auto'>Loading .... Please Wait</h1>

  return (
    <div className='relative z-3 top-0 flex gap-6 flex-wrap justify-center '>
      {results.map((item,idx)=>{
        return <div key={idx} ><ResultCard item={item}/></div>
      })
      
      }

    </div>
  )
}

export default ResultGrid
