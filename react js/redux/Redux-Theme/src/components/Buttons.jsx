import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setBlack,setBlue,setWhite } from '../redux/Features/ThemeSlice';


const Buttons = () => {
    const dispatch = useDispatch();

  return (
    <div className='flex justify-center'>
      <button onClick={()=>{
        dispatch(setBlack ())}} 
        className='active:scale-95 text-3xl bg-green-500 rounded font-bold cursor-pointer border-none transition-transform px-5 py-2 m-4'>Dark</button>
      <button onClick={()=>{dispatch(setWhite())}} className='active:scale-95 text-3xl bg-green-500  rounded font-bold cursor-pointerborder-none transition-transform px-5 py-2 m-4'>White</button>
      <button onClick={()=>{dispatch(setBlue())}} className='active:scale-95 text-3xl bg-green-500 rounded font-bold cursor-pointer border-none transition-transform px-5 py-2 m-4'>Blue</button>
    </div>
  )
}

export default Buttons
