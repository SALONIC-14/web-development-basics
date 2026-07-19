import React, { useContext } from 'react'
import { DataContext } from './components/CounterContext'

const Header = () => {
  let {Count,setCount}=useContext(DataContext)
  return (
    <div className='flex gap-20'>
      <h1>Header Section</h1>
      <button onClick={()=>{
        setCount(Count+1)
      }} className='h-12 w-67 bg-[#000D85] font-bolder text-[23px] cursor-poitner transition-transform rounded active:scale-95 text-white'>Increase</button>
    </div>
  )
}

export default Header
