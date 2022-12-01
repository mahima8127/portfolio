import React from 'react'
import { Image } from 'react-bootstrap'


export default function Ccard(props) {
  return (
    <div style={{display:'table',background:'white',width:'70%',minHeight:'100px',margin:'10px',padding:'40px',
    boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
  <div style={{display: 'table-cell',verticalAlign:'middle',textAlign:'center'}}>
    <div>
      <Image  src={props.file}></Image>
      <h6 style={{marginTop:'5px'}}>{props.title}</h6>
      <p style={{marginTop:'5px'}}>{props.year}</p>
    </div>
  </div>
</div>
  )
}
