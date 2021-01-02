import React from "react"
import Conditional from "./Conditional.jsx"

// this example is showing the situation when we are getting some data from API and user is waiting a few seconds, and for that few seconds we want to display something so the users don't think our website has crushed 

class ConditionApp extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  // this is pretending we are making a call to API
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  render()
  {
    return (
      <>
      <h1>11. Conditional render</h1>
      <h4 style={{textDecoration: "underline"}}>Example 1</h4>
      {/* With 3) condition in here */}
      <div>
        {this.state.isLoading ? 
        <h2>I am loading</h2> : 
        <Conditional isLoading={this.state.isLoading} />
        }
      </div>

      {/* With 2) ternary method */}
      {/* <div>
        <Conditional isLoading={this.state.isLoading} />
      </div> */}

      </>
    )
  }
}

export default ConditionApp