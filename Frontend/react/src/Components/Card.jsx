// First letter of the component should be capitalized.
import React from 'react'

const Card = (props) => {
  return (
    <div style={{border: '5px solid red', width: '500px'}}>
        <h1>Student Record</h1>
        <img src={props.img} style={{borderRadius: '50%'}}/>
        <h3>Student Name: {props.name}</h3>
        <h3>Student Class: {props.class}</h3>
    </div>
  )

}

export default Card