import React from 'react'

class FormApp2 extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      gender: "",
      favColor: "blue"
    }
  }

  handleChange = (e) => {
    // grab properties from where event fired 
    const { name, value, type, checked } = e.target

    type === "checkbox" ?           // if type = checkbox
      this.setState({
        [name]: checked             // set the value to what cheched is
      }) :                          // else
      this.setState({         
        [name]: value
      })
  }

  render() {
    return(

      
      <div>

        <h1>14. Forms - Part 2: textarea, checkbox, radiobutton</h1>
          
        <form action="">
    
          Insert your name
          <input 
            type="text" 
            value={this.state.firstName} 
            name="firstName" 
            placeholder="First Name" 
            onChange={this.handleChange}
          />
    
          <input 
            type="text" 
            value={this.state.lastName} 
            name="lastName" 
            placeholder="Last Name" 
            onChange={this.handleChange}
          />

          <h3>Textarea</h3>
          <textarea 
            value="My placeholder"
            onChange={this.handleChange}
          />

          <br/>

          <h3>Checkbox</h3>
          <label htmlFor="isFriendly">Are you friendly? Uncheck if it is not true
            <input 
              type="checkbox"
              name="isFriendly"
              checked={this.state.isFriendly} 
              onChange={this.handleChange}
            />
          </label>

          <h3>Radiobutton</h3>
          <label>
            Male
            <input 
              type="radio"
              name="gender" // same name for both buttons makes sure we can only choose 1
              value="male"
              checked={this.state.gender === "male"} 
              onChange={this.handleChange}
            />
          </label>
          <br/>
          <label>
            Female
            <input 
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"} 
              onChange={this.handleChange}
            />
          </label>
          <br/>

          <h3>Select</h3>
          <label>
            Pick your favourite color
            <select 
              value={this.state.favColor}
              onChange={this.handleChange}
              name="favColor"
              >
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="pink">Pink</option>
            </select>
          </label>
    
          </form>
          <br/>
          <span style={{ backgroundColor: "yellow" }}>Display the state (for testing)</span>
          <button>{this.state.firstName}</button>
          <button>{this.state.lastName}</button>
          <button>You are a {this.state.gender}</button>
          <button>You {this.state.isFriendly ? " are" : " are not"} friendly</button>
          <button>Your favourite color is {this.state.favColor}</button>

      </div>
    )
  }
}

export default FormApp2