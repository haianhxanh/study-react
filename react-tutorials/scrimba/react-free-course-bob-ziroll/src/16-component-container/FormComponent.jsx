import React from 'react'
// includes rendering logic in return()
// will be receiving everything that is passed down from parents in form of props 

// receives           props
function FormComponent(props) {
  return (
    <div>
      <form>

        <input 
          name="firstName" 
          value={props.data.firstName} 
          onChange={props.handleChange} 
          type="text" 
          placeholder="First Name"
        /> <br/>

        <input 
          name="lastName" 
          value={props.data.lastName} 
          onChange={props.handleChange} 
          type="text" 
          placeholder="Last Name"
        /><br/>

        <input name="age" 
          value={props.data.age} 
          onChange={props.handleChange} 
          type="text" 
          placeholder="Age"
        /><br/>

        <label htmlFor="">
          <input 
            name="gender"
            value="male"
            type="radio"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          />
           male
        </label> <br/>

        <label htmlFor="">
          <input 
            name="gender"
            value="female"
            type="radio"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          />
           female
        </label> <br/>

        <label htmlFor="">
          <select 
            name="destination" 
            value={props.data.destination}
            onChange={props.handleChange}
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
              onChange={props.handleChange}
              checked={props.data.dietaryRestrictions.isVegan}
            /> Vegan
          </label><br/>

          <label htmlFor="">
            <input 
              type="checkbox"
              name="isKosher" 
              onChange={props.handleChange}
              checked={props.data.dietaryRestrictions.isKosher}
            /> Kosher
          </label><br/>

          <label htmlFor="">
            <input 
              type="checkbox"
              name="isLactoseFree" 
              onChange={props.handleChange}
              checked={props.data.dietaryRestrictions.isLactoseFree}
            /> Lactose free
          </label><br/>
       </div>

      </form>

      <div style={{ border: "1px gray solid", width: "50vw" }}>
        <h3>Entered information</h3>
        <p>Your name: <strong>{props.data.firstName} {props.data.lastName}</strong></p>
        <p>Your age: <strong>{props.data.age} years old</strong></p>
        <p>Your gender: <strong>{props.data.gender}</strong></p>
        <p>Your destination: <strong>{props.data.destination}</strong></p>
        <p>Your dietary restrictions</p>
        {props.data.dietaryRestrictions.isVegan ? <li>Vegan</li> : ""}
        {props.data.dietaryRestrictions.isKosher ? <li>Kosher</li> : ""}
        {props.data.dietaryRestrictions.isLactoseFree ? <li>Lactose free</li> : ""}
      </div>
    
    </div>
    
  )
}

export default FormComponent