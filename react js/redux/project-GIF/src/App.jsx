import React from 'react'
import { fetchGifs, fetchPhotos, fetchVideo } from './Api/mediaApi'
import SearchBar from './Components/SearchBar'
import Tabs from './Components/Tabs'
import ResultGrid from './Components/ResultGrid'

const App = () => {
  return (
    <div className='w-screen flex flex-col gap-8 items-center h-max-screen bg-[#faefef]'>
      <div className='flex justify-center w-[88%] h-[18%]'><SearchBar/></div>
      <div className='w-[40%] h-[10%]'><Tabs/></div>
      <div className='w-[90%]'><ResultGrid/></div>

      
    </div>
  )
}

export default App
