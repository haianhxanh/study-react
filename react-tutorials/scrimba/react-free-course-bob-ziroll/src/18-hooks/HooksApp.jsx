import React, { useState } from 'react'
import HooksStateApp from './HooksStateApp.jsx'
import HooksUseEffect from './HooksUseEffect.jsx'
import HooksUseEffectWithCleanUp from './HooksUseEffectWithCleanUp.jsx'

// using hooks
function HooksApp() {
  // useState(initial value)
  const [ answer ] = useState("yes")

  return (
    <div>
      <h1>18. Hooks</h1>
      <p>Is state important to know? {answer} </p>
      <HooksStateApp />
      <HooksUseEffect />
      <HooksUseEffectWithCleanUp />
    </div>
  )
}

// class component

// class HooksApp extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       value: "yes"
//     }
//   }

  // const person = {
  //   name: "Joe",
  //   age: 42
  // }

  // // extract name and age from object { person }
  // const {name, age } = person 

//   render() {
//     return(
//       <div>
//         <h1>18. Hooks</h1>
//         <p>Hello from Hooks class</p>
//       </div>
//     )
//   }
// }

export default HooksApp