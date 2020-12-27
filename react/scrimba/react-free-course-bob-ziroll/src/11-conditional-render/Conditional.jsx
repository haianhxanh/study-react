import React from "react"

function Conditional(props) {
  // 3) condition in app
  return <h2>I am fully loaded</h2>

  // 2) ternary operator method
  // condition ? statement if true : statement if false
  // need to use return statement
  // need to wrap condition inside of {} and a div
  // return (
  //   <div>
  //     {props.isLoading === true ? 
  //     <h2>I am loading</h2> : 
  //     <h2>I am fully loaded</h2>}
  //   </div>
  // )
  
  // 1) long method
  // if(props.isLoading) {

  //   return (
  //     <h2>I am loading</h2>
  //   )
  // } else {
  //   return (
  //     <h2>I am fully loaded</h2>
  // )
  // }

}

export default Conditional