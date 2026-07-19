import React from 'react'
import Buttons from './components/Buttons'
import { useSelector, useDispatch } from "react-redux";


const App = () => {
  const dispatch = useDispatch();
  const themeColor =useSelector((state)=>state.theme.themeColor)
  console.log('themeColor', themeColor)
  return (
    <div style={{ backgroundColor: themeColor }} className='h-screen w-screen'>
      <Buttons/>
    </div>
  )
}

export default App
