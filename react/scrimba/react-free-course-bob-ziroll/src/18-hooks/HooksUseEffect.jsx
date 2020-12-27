import React, { useState, useEffect } from 'react'
import randomcolor from 'randomcolor'

function HooksUseEffect() {
  // setCount is function available to change [count]
  const [ count, setCount ] = useState(0)
  const [ color, setColor ] = useState("")

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  // everytime the component renders, it is calling useEffect()
  // in this case useEffect() is setting a new color to the state, which causes a re-render
  // useEffect() has a 2nd parameter as an array, where we can specify what variables I want to watch for changes in, if this particular variable changes, it will run the effect
  // in this case the variable we want to run the effect on and change the color for, is the {count}
  useEffect(() => {
    setColor(randomcolor())  // without 2nd parameter this causes an infinite loop
  }, [count])

  // set color only for the 1st time, leave 2nd parameter as an empty array 
  // useEffect(() => {
  //   setColor(randomcolor()) 
  // }, [])

  return(
    <div>
      <h1>18.2. Hooks - useEffect()</h1>
      <p>Run random color as we change the count</p>
      <h2 style={{ color: color }}>{count}</h2>
      {/* onClick is receiving an event */}
      {/* Whatever I provide to setCount() it will be a new version of state */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default HooksUseEffect