import React from 'react'
import { useState } from 'react'
import { setQuery } from "../redux/Features/SearchSlice";
import { useDispatch } from 'react-redux'



const SearchBar = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();

    dispatch(setQuery(text))
    console.log('text', text)
    setText('')

  }

  return (
    <div >


      <form className='flex gap-11 mt-3.5 items-center' onSubmit={submitHandler}>

        <input required
        onChange={(elem) => {
          setText(elem.target.value)
        }}
           
          
          className=' hover:bg-[#adadad] border-gray-400 ml-3.5 shadow-gray-400 shadow-2xl outline-none pl-3.5 text-[#4b4a4a] bg-[#d3d3d3] w-[75vw] h-12 border rounded-xl '
          type="text" placeholder='Search Here......' value={text} />


        <button type="submit" onClick={() => {
          console.log('text', text)
        }

        }
          className='h-10 border-none w-25 rounded transition-transform active:scale-95 shadow-2xl shadow-black text-white font-bold bg-[#d40000] text-xl'>
          Search</button>
      </form>

    </div>
  )
}

export default SearchBar

