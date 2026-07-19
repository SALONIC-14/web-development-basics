import React, { useContext } from 'react'
import { ThemeContext } from './CounterContext'

const Theme_botton = () => {
    let {Theme,setTheme}=useContext(ThemeContext)
  return (
    <div className='flex gap-15 justify-end'>
      <button onClick={()=>{
        setTheme('white')
      }} className='h-12 w-67 bg-[#000D85] font-bolder text-[23px] cursor-poitner transition-transform rounded active:scale-95 text-white'>White</button>
      <button onClick={()=>{
         setTheme('black')
      }} className='h-12 w-67 bg-[#000D85] font-bolder text-[23px] cursor-poitner transition-transform rounded active:scale-95 text-white'>Dark</button>
    </div>
  )
}

export default Theme_botton
