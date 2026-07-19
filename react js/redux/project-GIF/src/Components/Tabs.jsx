// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/Features/SearchSlice'
// import CollectionTab from './CollectionTab'

const Tabs = () => {
  const tabs = ['Photos', 'Videos', 'Gifs','Collections']
  const dispatch=useDispatch()
  const activeTab=useSelector((state)=>state.search.activeTab)
  
  return (
    <div className=' flex justify-evenly'>
     {
      tabs.map((elem,idx)=>{
        return(
                <button key={idx}
                onClick={()=>{
                  dispatch(setActiveTab(elem))
                  
                }}

                className={`${activeTab==elem? 'bg-[#000000]':'bg-[#009dcc]'} h-10  border-none w-30 rounded transition-transform active:scale-95  text-white font-bold cursor-pointer text-xl`}
                >{elem}</button>

        );

      })
     }
     
    </div>
  )
}

export default Tabs
