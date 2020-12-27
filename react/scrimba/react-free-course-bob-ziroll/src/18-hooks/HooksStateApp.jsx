import React, { useState, useEffect } from 'react'

function HooksStateApp() {
  // setCount is function available to change [count]
  const [ count, setCount ] = useState(0)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  return(
    <div>
      <h1>18.1. Hooks - Changing state</h1>
      <h2>{count}</h2>
      {/* onClick is receiving an event */}
      {/* Whatever I provide to setCount() it will be a new version of state */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default HooksStateApp