import React from 'react'

class FormsPracticeApp extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      dietaryRestrictions: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false,
      }
    }
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target
    if (type === "checkbox") {
      this.setState(prevState => {
        return {
          dietaryRestrictions: {
            ...prevState.dietaryRestrictions,
            [name]: checked
          }
        }
      })
    } else this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <h1>15. Forms - Practice</h1>

        <form>

          <input 
            name="firstName" 
            value={this.state.firstName} 
            onChange={this.handleChange} 
            type="text" 
            placeholder="First Name"
          /> <br/>

          <input 
            name="lastName" 
            value={this.state.lastName} 
            onChange={this.handleChange} 
            type="text" 
            placeholder="Last Name"
          /><br/>

          <input name="age" 
            value={this.state.age} 
            onChange={this.handleChange} 
            type="text" 
            placeholder="Age"
          /><br/>

          <label htmlFor="">
            <input 
              name="gender"
              value="male"
              type="radio"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />
             male
          </label> <br/>

          <label htmlFor="">
            <input 
              name="gender"
              value="female"
              type="radio"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />
             female
          </label> <br/>

          <label htmlFor="">
            <select 
              name="destination" 
              value={this.state.destination}
              onChange={this.handleChange}
            >
              <option value="">--- Please choose a destination ---</option>
              <option value="Barcelona">Barcelona</option>
              <option value="Prague">Prague</option>
              <option value="Frankfurt">Frankfurt</option>
              <option value="Mallorca">Mallorca</option>
            </select>
          </label> <br/>

         <div>
          Dietary restrictions - check the box if you have any <br/>
            <label htmlFor="">
              <input 
                type="checkbox"
                name="isVegan" 
                onChange={this.handleChange}
                checked={this.state.dietaryRestrictions.isVegan}
              /> Vegan
            </label><br/>
  
            <label htmlFor="">
              <input 
                type="checkbox"
                name="isKosher" 
                onChange={this.handleChange}
                checked={this.state.dietaryRestrictions.isKosher}
              /> Kosher
            </label><br/>
  
            <label htmlFor="">
              <input 
                type="checkbox"
                name="isLactoseFree" 
                onChange={this.handleChange}
                checked={this.state.dietaryRestrictions.isLactoseFree}
              /> Lactose free
            </label><br/>
         </div>

        </form>

        <div style={{ border: "1px gray solid", width: "50vw" }}>
          <h3>Entered information</h3>
          <p>Your name: <strong>{this.state.firstName} {this.state.lastName}</strong></p>
          <p>Your age: <strong>{this.state.age} years old</strong></p>
          <p>Your gender: <strong>{this.state.gender}</strong></p>
          <p>Your destination: <strong>{this.state.destination}</strong></p>
          <p>Your dietary restrictions</p>
          {this.state.dietaryRestrictions.isVegan ? <li>Vegan</li> : ""}
          {this.state.dietaryRestrictions.isKosher ? <li>Kosher</li> : ""}
          {this.state.dietaryRestrictions.isLactoseFree ? <li>Lactose free</li> : ""}
        </div>
      
      </div>
      
    )
  }
}

export default FormsPracticeApp