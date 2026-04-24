import React, { useState } from 'react'

const CounterApp = () => {
  const [count, setCount] = useState(0); // DataType[UseState Variable name, UseState Function] = useState inisialization.
  
  function inc(){
    setCount(count + 1)
  }

  function dec(){
    setCount(count - 1)
  }

  return (
    <div style={{border: '5px solid red'}}>
      <h1 style={{ color: 'lightblue'}}>CounterApp</h1>
      <br/>
      <button onClick={inc} style={{padding: '10px', margin:'20px', backgroundColor: 'blue', borderRadius: '50%'}}>Increment</button>
      <span>{count}</span>
      <button onClick={dec} style={{padding: '10px', margin: '20px', backgroundColor: 'red', borderRadius: '50%'}}>Decrement</button>
      </div>
  )
}

export default CounterApp