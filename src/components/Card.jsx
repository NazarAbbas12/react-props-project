import React from 'react'
import {User} from 'lucide-react'


function Card(props) {
  return (
    <div className='card'>
      
      <div className='top'>
        <button>{props.availability? "available" : "not-available"}</button>
        <h4>{props.pay}</h4>
      </div>

      <div className='center'>
        <img src={props.img} alt="" />
        <h2>{props.name}</h2>
        <span>{props.skill}</span>
        <h4><User />Freelancer</h4>

        <div className='center-btn'>
          {props.skills.map((skills,index)=>(
             <button key={index}>{skills}</button>
          ))}
        </div>

        <p>{props.about}</p>
      </div>

      <div className='bottom'>
        <h2>VIEW PROFILE</h2>
      </div>
    </div>
  )
}

export default Card