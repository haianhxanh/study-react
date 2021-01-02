import React from "react";
import "./change.scss"

class ChangeStateApp extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    
    // this method is okay but we try to avoid changing the original state
    // this.state.count++

    // instead, we replace the original state with a new one, we use method setState() to which we can pass an object
    // first we pass in a function that will get the original state previousState()
    // note that if we don't need previous state, we can simply pass in the new state without getting the original state 
    this.setState((previousState) => {
      return {
        // avoid using ++ because that will change the previous state
        count: previousState.count + 1
      }
    })
  }

  render() {
    return (
      <>
      <h1>08.1. Change state</h1>
      <div className="change">

        <h2>{this.state.count}</h2>
        <button className="change-button" onClick={this.handleClick}>Change!</button>
      </div>
      </>
    )
  }
}

export default ChangeStateApp