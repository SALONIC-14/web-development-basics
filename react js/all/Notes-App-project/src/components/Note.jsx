import React, { useState } from 'react'

const Note = () => {

  const [title, setTitle] = useState('')
  const [Note, setNote] = useState('')
  const [Connectarr, setConnectarr] = useState([])
  // var dataobj={}


  const SubmitHandler = (e) => {
    e.preventDefault()
    const newarr = [...Connectarr]
    newarr.push({ title, Note })
    setConnectarr(newarr)
    console.log(Connectarr)


    setTitle('')
    setNote('')
  }

  return (
    <div className='min-h-screen w-full   flex  gap-1 '>
      <div className='bg-black  w-1/2 flex  '>

        <form onSubmit={(e) => {
          SubmitHandler(e)
        }}
        >

          <img className='mt-8 ml-23 mr-2 h-12 w-12   rounded-full ' src="https://media.istockphoto.com/id/1487237198/vector/notepad-icon-vector-design-template-in-white-background.jpg?s=612x612&w=is&k=20&c=En6v6_OH3uqi3aMJR_yoNDtXSvXjyDwNiK9KxVfswes=" alt="" />
          <h1 className='text-white text-5xl  [text-shadow:2px_4px_6px_rgba(255,255,255,0.6)]  font-extrabold -mt-13.25 ml-38 h-15  w-70'>Add Notes</h1>

          <div className=' flex flex-col'>
            <div>
              <input onChange={
                function (elem) {
                  setTitle(elem.target.value)

                }
              } className='text-white  focus:outline-none focus:border-white rounded text-2xl px-2.5 mt-7 font-bold border-white border-3 w-xl h-11 mx-8' name="ENTER TITTLE" placeholder='Enter Title ' value={title} id=""></input>
              <textarea onChange={
                function (elem) {
                  setNote(elem.target.value)

                }
              } className='text-white placeholder:text-[20px] focus:outline-none focus:border-white rounded text-2xl px-2.5 mt-7 font-bold border-white border-3 w-xl h-45 mx-8' name="ENTER TITTLE" placeholder='Start Typing... ' value={Note} id=""></textarea>
              <button className='text-black bg-white shadow-2xl shadow-blue-200 active:scale-95 transition-transform focus:outline-none  focus:border-white rounded text-2xl px-2.5 mt-7 font-bold duration-100 border-white cursor-pointer border-3 w-xl h-11 mx-8' type="submit">ADD NOTE </button>
            </div>
          </div>
        </form>
      </div>


      <div className='bg-black h-screen  w-1/2'>

        <h1 className='text-white text-5xl  [text-shadow:2px_4px_6px_rgba(255,255,255,0.6)]  font-extrabold h-15 mt-8 ml-23 mr-2    rounded-full  w-89'> Recent Notes</h1>
        <section  className='relative flex flex-wrap h-122 overflow-y-auto'>
          {
            Connectarr.map(function (elem, index) {
              return (

                <div key={index} className='relative '>
                  <img className='  h-55 z-0 m-3 rounded-b-3xl w-45' src="https://img.freepik.com/premium-photo/white-recycle-paper-cardboard-surface-texture-background_293060-20747.jpg?w=996" alt="" srcset="" />
                  <img className=' absolute top-0 right-21.25 h-9 w-9 rounded-full' src="/pinit.png" alt="" />
                  <h1 className='absolute text-center text-[20px] w-45 min-h-11 left-3  top-6 text-purple-800 font-bold'>{elem.title}</h1>
                  <p className="absolute p-2.5 top-14 left-3 w-45 h-30
                  text-center text-[15px] text-purple-800 font-bold
                  break-all overflow-hidden flex-wrap overflow-y-auto">
                    {elem.Note}
                  </p>
                  <button onClick={
                    function () {
                    const copyArr=[...Connectarr]
                    copyArr.splice(index,1)
                    setConnectarr(copyArr)

                    }
                  } className="absolute text-white top-46 left-16 tracking-widest bg-red-700 shadow-2xl shadow-black active:scale-95 transition-transform focus:outline-none  focus:border-white rounded text-[15px] font-bold px-2.5   duration-100 border-white cursor-pointer   h-10  " type="button">Delete</button>
                </div>

              );
            })
          }
        </section>





      </div>

    </div >
  )
}

export default Note


{/*  */ }