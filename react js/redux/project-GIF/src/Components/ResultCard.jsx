// import React from 'react'
import { useSelector, useDispatch } from "react-redux";
// import { setActiveTab, } from '../redux/Features/SearchSlice'
import { setSaveResults } from '../redux/Features/CollectionSlice';



const ResultCard = ({item}) => {
  const saveResults = useSelector((state) => state.collection.saveResults);


  const activeTab = useSelector((state) => state.search.activeTab);
  const dispatch = useDispatch();
  console.log('activeTab', activeTab)

  
  const save_it = (item) => {
 
  dispatch(setSaveResults( {id: item.id, type: item.type, url: item.url}))
  console.log(saveResults);
};
  
  
  return (
    <div className='relative overflow-hidden rounded-2xl w-50  h-64 bg-[#e5e4e2]'>
    {item.type=='photo'? <img className=' relative z-3  w-full h-full object-cover' 
    src={item.url} alt=""  /> :''}

    {item.type=='video'? <video className='relative z-3 w-full h-full object-cover' autoPlay loop muted src={item.url} ></video>:''}
    
    {/* {activeTab=='Collections'? show_results():''} */}

    {item.type=='GIF'? <img className='relative z-3 w-full h-full object-cover' src={item.url} alt="GIF"  />:''} 

      
    
  
  
      <button onClick={()=>{
        save_it(item)
      }}
      
      className='absolute  z-10 bottom-2 right-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-transform active:scale-95 duration-300'>
        Save it
      </button>
    </div>
  )
}

export default ResultCard
