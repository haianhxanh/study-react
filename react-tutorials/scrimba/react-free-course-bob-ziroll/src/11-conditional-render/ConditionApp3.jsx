import React from "react"

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
    // class-based component
    // constructor method
2. Have state keep track of whether the user is logged in or not
    // isLoggedIn: Boolean (true or false)
3. Add a button that logs the user in/out
    // event listener (onClick)
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
        // Conditional Rendering
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
    // Conditional Rendering
*/

class ConditionApp3 extends React.Component {
  constructor() {
    super()
    this.state = {
      logInOut: true,
    }
  }
  
  btnClick = () => {
    this.setState((prevState) => {
      return {
        logInOut: !prevState.logInOut,
      }
    })
    // return this.state.logInOut = !this.state.logInOut
  }

  render() {
    let btnStatus

    // 1st method
    if (this.state.logInOut) {
      btnStatus = "Log in"
    } else {
      btnStatus = "Log out"
    }

    // 2nd method 
    // let btnStatus = this.state.logInOut ? 'Log in' : 'Log out';

    let text = this.state.logInOut ? "You are logged out" : "You are logged in"

    return (
      <>
      <h4 style={{textDecoration: "underline"}}>Example 3</h4>
      <button onClick={this.btnClick}>{btnStatus}</button>
      <br/>
      <span style={{backgroundColor: "lightcoral"}}>{text}</span>
      </>
    )
   
  }
}

export default ConditionApp3