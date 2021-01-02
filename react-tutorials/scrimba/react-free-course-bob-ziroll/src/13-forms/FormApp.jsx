import React from 'react'

class FormApp extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      // target = where the event was fired
      // value = value of input box
      // firstName: event.target.value, 
      [event.target.name]: event.target.value
      // grab the name property inside of input, since it matches our state property name, the state will be updated accodingly 
      // firstName: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>13a. React Form - text type</h1>
        <p>This exercise is about tracking every changes that the user inserts into the form</p>
        <form action="">
          {/* handleChange() is run everytime the input box is changed
          handleChange() changes the state of the form
          so ie. first name gets updated to whatever current value of input box is */}
          Type something here 
          <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange}/>
          <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange}/>

        </form>

        <span>Display the state (for testing)</span>
        <button>{this.state.firstName}</button>
        <button>{this.state.lastName}</button>

      </div>
    )
  }
}


export default FormApp