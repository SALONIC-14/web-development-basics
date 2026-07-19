import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
      let Navi=useNavigate()
  return (
    <div>
      <h1 className='font-bold'>About Page</h1>
      <button onClick={()=>{Navi('/')}} className='transition: transform active:scale-95'>To Home</button>
    </div>
  )
}

export default About
