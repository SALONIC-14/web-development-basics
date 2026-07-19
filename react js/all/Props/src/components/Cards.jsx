import React from 'react'

const Cards = (props) => {
  return (
    <div className='card'>
       <img src={props.img} alt="" />
       <h2 className='h2'>{props.username}</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque?</p>
       <button>View</button>
    </div>
  )
}

export default Cards
