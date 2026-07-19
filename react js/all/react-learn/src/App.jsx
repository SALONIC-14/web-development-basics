import React, { useState } from 'react'
import Routing from './components/Routing';

const App = () => {

  const [items, setitems] = useState({name:'Bhaya', age:21,skill:['react','html','tailwind','css','java']})


   const changeit = ()=>{
    const newitems={...items};
    newitems.name='Shra'
    newitems.age=20
    const newitemsarr=[...items.skill]
    newitemsarr.push('python')




    newitems.skill=newitemsarr  /// important line for the arr with object
    setitems(newitems)
    console.log(newitemsarr)
    
    
   }

 return (
    <div> 
    {/* //   <h1 className=' text-6xl m-3.5 '>NAME :{items.name} <br /><br />AGE : {items.age} <br /><br />SKILL: {items.skill.map((elem) => elem).join(" ")}</h1>

    //   <br />
    //     <button onClick={changeit} className='uppercase rounded-[11px] ml-80 m-10 p-1.5 active:scale-95 transition-transform  border-none bg-gray-400 text-white text-2xl font-extrabold h-11 w-40 shadow-2xl shadow-olive-600'>submit</button>  */}
    <Routing/>
    </div>
    
  )
} 

export default App
























// click 
// import React from 'react'

// const App = () => {


//   function clog(val) {
//     console.log(val.target.value)
//   }


//   return (
//     <div>
//         {/* <button onClick={
//           console.log("hello")
//         } className='uppercase rounded-[11px] m-10 p-1.5border-none bg-blue-300 text-white text-2xl font-extrabold h-9 w-40'>submit</button> */}



//       <input onChange={function(elem){
//              clog(elem)
              
        
//       }} className='uppercase rounded-[11px] m-10 p-3.75 border-none bg-blue-300 text-white text-2xl  h-9 min-w-40' type="text" placeholder='Enter Name'  />

//     </div>
//   )
// }

// export default App

// //  1st way for click
// //     <button onClick={function () {
//       //   console.log("hi")
//       // }} className='uppercase rounded-[11px] m-10 p-1.5border-none bg-blue-300 text-white text-2xl font-extrabold h-9 w-40'>submit</button>

// //  2nd way 
//     // <button onClick={clog} className='uppercase rounded-[11px] m-10 p-1.5border-none bg-blue-300 text-white text-2xl font-extrabold h-9 w-40'>submit</button>


















// counter app

//  const [count, setcount] = useState(0)

//   function increase(){
//      setcount(count+1)
//   }
//   function decrease(){
//      setcount(count-1)
//   }
  

//  <h1 className='flex justify-center items-center rounded-2xl shadow-2xl shadow-black text-white w-50 h-50 text-9xl bg-gray-400 m-9  mx-auto'>{count}</h1>
 
//        <div  className='flex  w-160 h-20 mx-auto justify-between'>

        

//         <button onClick={decrease} className='active:scale-95 transition-transform  flex justify-center items-center rounded-2xl shadow-2xl shadow-black text-white w-50 h-18 text-3xl font-bold bg-gray-500 m-9  mx-auto'>Decrease</button>

//         <button onClick={increase} className='active:scale-95 transition-transform flex justify-center items-center rounded-2xl shadow-2xl shadow-black text-white w-50 h-18 text-3xl font-bold bg-gray-500 m-9  mx-auto'>Increase</button>
// </div> 