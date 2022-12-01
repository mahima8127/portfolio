import React from 'react'

export default function SerCard(props) {
  
  return (
    <div style={{background:'white',padding:'40px',margin:'20px',textAlign:'center',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
       {props.icon}
        <h5 className='mt-3'>{props.title}</h5>
        <p>{props.desc}</p>


    </div>
  )
}
