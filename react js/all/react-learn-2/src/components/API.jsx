import React, { useState } from 'react'
// "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
const API = () => {
  const [Show, setShow] = useState([])
  async function getData() {
    const Response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await Response.json()
    setShow(data)



  }

  return (
    <div>
      <button onClick={getData}
        className='border-2 rounded border-black active:scale-95 transition-transform  bg-red-500 m-8 text-2xl py-2 px-4 font-bold text-white' >Get Data by Fetch</button>

      {Show.map(function (elem, idx) {

        return (
          <div key={idx} className='flex  gap-3.5'>
            <h1 className='text-[16px]  mx-1 font-bold'>{elem.title}</h1>
          </div>
        );

      }

      )}


    </div>


  )
}

export default API
