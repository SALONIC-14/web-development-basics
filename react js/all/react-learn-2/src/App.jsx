import React from 'react'
import API from './components/API'
import Axios from './components/Axios'

const App = () => {
  return (
    <div className='flex flex-col'>
      <API/>
      <Axios/>
    </div>
  )
}

export default App


// ################## LOCALSTROAGE###############################
// const user1={
//   user_name:'Bhaya',
//   age:21,
//   Rank:'1st'

// }

// localStorage.setItem('user1',JSON.stringify(user1))
// const get = JSON.parse(localStorage.getItem('user1'))
// console.log(get)
  // localStorage.setItem("sonu","Growing")
//  const a=localStorage.getItem("sonu")
// localStorage.clear()
// localStorage.removeItem("sonu")
