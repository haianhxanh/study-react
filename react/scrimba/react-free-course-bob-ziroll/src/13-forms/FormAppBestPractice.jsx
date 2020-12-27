import React from 'react'

class FormBestApp extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: ""
    }
  }

  handleChange = (event) => {
    // best to destruct the object
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <h1>13b. React Form - text type - Best practices</h1>
        {/* Controlled form */}
        <h2>Concept of controlled form</h2>
          <li>State directs what is inside of input box >>>> state is source of truth</li>
          <li>For this, we need to add value property inside input tag</li>
        <h2></h2>

        <br/><br/>
        <form action="">

          Type something here 
          <input 
            type="text" 
            value={this.state.firstName} 
            name="firstName" 
            placeholder="First Name" 
            onChange={this.handleChange}/>

          <input 
            type="text" 
            value={this.state.lastName} 
            name="lastName" 
            placeholder="Last Name" 
            onChange={this.handleChange}/>

        </form>

        <span>Display the state (for testing)</span>
        <button>{this.state.firstName}</button>
        <button>{this.state.lastName}</button>

      </div>
    )
  }
}


export default FormBestApp