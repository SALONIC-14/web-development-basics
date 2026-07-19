import React, { useContext } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { DataContext, ThemeContext } from './CounterContext'
import Theme_botton from './Theme_botton'

const Counter = () => {
  let { Count } = useContext(DataContext)
  let {Theme,setTheme}=useContext(ThemeContext)
  return (
    <div style={{ backgroundColor: Theme }} className='flex flex-col items-center justify-around h-screen w-screen 
    '>
      <Theme_botton/>
      <Header />
      <div className='flex gap-20'>
        <div className=' font-bold text-cyan-700 text-2xl'>Wel-come To Counter App</div>
        <div className='bg-blue-900 text-white w-34 h-34 text-7xl font-bolder flex justify-center items-center'>{Count}</div>

      </div>
      <Footer />
    </div>
  )
}

export default Counter
