import React, { useEffect, useState } from 'react'

const Gallary = () => {

  const [Data, setData] = useState([])
  const [index, setindex] = useState(1)
  const get_img = async () => {
    const Response = await fetch(`https://picsum.photos/v2/list?page=${index}&limit=25`)
    const data = await Response.json();
    
    setData(data)

  }
  useEffect(function () {

  }, [get_img()])
  function prev() {
    
    if(Data.length==0){
      <h1>loading.............</h1>
    }
    if (index > 1) {
      setData([])
      setindex(index-1)
      console.log(index)
    }



  }
  function next() {

    
    setindex(index+1)
    console.log(index)
  }







  return (
    <div className='  w-full h-full bg-black'>
      <div className='flex flex-col relative gap-2'>
        <div className='flex w-screen overflow-y-auto gap-4  justify-around flex-wrap h-[85vh]'>
          {
            Data.map(function (elem, idx) {

              return (
                <div key={idx} >
                  <img className=' object-fill object-center rounded-2xl mt-8 w-56 h-59 bg-amber-800 ' src={elem.download_url} alt="" />
                  <h1 className='font-bold text-white pt-2 mx-2'>{elem.author}</h1>
                </div>
              );


            })}



        </div>



        <div className='  h-18.5 flex justify-around items-center w-full'>
          <div className='fixed '>
            <button onClick={prev} className=' font-bold text-[19px] bg-red-600 py-2 px-5 mr-7 transiton-transform active:scale-95 rounded shadow '>Prev</button>
            <button onClick={next} className=' font-bold text-[19px] bg-red-600 py-2 px-5 ml-7 transiton-transform active:scale-95 rounded shadow-2xl shadow-amber-50'>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallary
