import React, { useState, useEffect } from 'react'
import randomcolor from 'randomcolor'

function HooksUseEffectWithCleanUp() {
  // setCount is function available to change [count]
  const [ count, setCount ] = useState(0)
  const [ color, setColor ] = useState("")

  // setInterval will run once as we have an empty [] as 2nd parameter to useEffect()
  // by each second the count will increase by 1
  useEffect(() => {

    // with only setInterval it will run forever, we need to store it to a const and run a function that would clean up setInterval 
    const intervalId= setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 1000)

    return () => clearInterval(intervalId)

  }, [])

  // color changes based on the change of the count
  useEffect(() => {
    setColor(randomcolor())  
  }, [count])

  return(
    <div>
      <h1>18.2. Hooks - useEffect() with Clean Up</h1>
      <p>Counter to increase automatically by 1 and color changes as soon as there is a change in the count </p>
      <h2 style={{ color: color }}>{count}</h2>
    </div>
  )
}

export default HooksUseEffectWithCleanUp