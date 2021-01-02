import React from 'react'
import FormComponent from './FormComponent.jsx'

class FormContainer extends React.Component {
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

  // FormContainer is going to delegate all UI things to Form Component
  // pass everything we have upthere down to FormComponent that is handleChange, and all state
  

  render() {

    return (
      <FormComponent 
      handleChange={this.handleChange} // this is going to be props in the FormComponent

      // 1st method - passing down as object 
      data={this.state}  // in FormComponent, it is going to be {props.data.firstName} etc.
                        // this method is more readable 

      // 2nd method, ... means all properties of something 
      // {...this.state}   // in Form Component, it will be {props.firstName} etc.    
                        // without the need to access the object as in 1st method

    />
    )
  }
}

export default FormContainer