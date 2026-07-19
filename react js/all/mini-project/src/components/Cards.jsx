import React from 'react'
import user from "../assets/user.png"

const Cards = (props) => {
  console.log(props.rate)
  return (
    <div className='card'>
        <header>{props.rate}</header>
        <img className='img1' src={props.img} alt="" />
        <div className="name">
            {props.name}
        </div>
        <div className='job_role'>{props.role}</div>
        <div className='occupation'><img src={user} alt="" />{props.occupation}</div>
        <div>
            <span className='skill skill1'>{props.skills[0]}</span>
            <span className='skill skill2'>{props.skills[1]}</span>
            <span className='skill skill3'>{props.skills[2]}</span>
            <span className='skill exp'>{props.skills[3]}</span>
        </div>
        <p>{props.description}</p>

        <div className='button'>
             VIEW PROFILE
        </div>

    </div>
    
  )
}

export default Cards
