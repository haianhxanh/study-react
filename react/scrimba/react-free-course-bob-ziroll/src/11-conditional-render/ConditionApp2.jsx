import React from 'react'

// In this example we want to render number of unread messages in case there are more than 0 of them
// in case of 0 unread messages, nothing renders 

class ConditionalApp2 extends React.Component {
  constructor() {
    super()
    this.state = {
      unreadMessages: [
        "Call your mom!",
        "New spams available. Links are safe to click!"
      ]
    }
  }

  render() {
    return (
      <div>
        <h4 style={{textDecoration: "underline"}}>Example 2</h4>

        {/* Method 1) using if-else condition with ternary operators */}
        {
          this.state.unreadMessages.length > 0 && 
          <h3>
          You have {this.state.unreadMessages.length} unread messages!
          </h3>
        }
        
      </div>
    )
  }
}

export default ConditionalApp2