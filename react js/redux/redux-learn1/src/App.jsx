import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increament,Decreament, Increamentbynumber} from './redux/features/CounterSlice'

const App = () => {
  const [num, setnum] = useState(5)


  const dispatch=useDispatch()
  const count=useSelector((state)=>state.counter.value)
  return (
    <div className='flex flex-col gap-20 justify-center items-center h-screen w-screen'>

      <div className='w-34 rounded h-34 font-bolder text-7xl bg-black text-red-800 flex justify-center items-center'>{count}</div>


      <div className='flex gap-20 '>
        <button onClick={()=>
          {dispatch(Increament())}

        } className='transition-transform active:scale-95 rounded py-4 px-7 bg-black font-bold text-white text-2xl'>Increament</button>
        <button onClick={()=>{
          dispatch(Decreament())
        }}  className='transition-transform active:scale-95 rounded py-4 px-7 bg-black font-bold text-white text-2xl'>Decreament</button>
        <input  onChange={(e)=>{
          setnum(e.target.value)
          console.log('num', num)

        }} className='bg-black text-4xl w-33 pl-13 text-red-900 font-bolder ' type="number" placeholder='Enter number' value={num} />
        
        <button onClick={()=>{
          dispatch(Increamentbynumber(num))
        }}
        className='transition-transform active:scale-95 rounded py-4 px-7 bg-black font-bold text-white text-2xl'>Increament by {num} </button>

      </div>
    </div>
  )
}

export default App
