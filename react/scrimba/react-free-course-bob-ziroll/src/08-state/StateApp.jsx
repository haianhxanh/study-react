import React from 'react';

class State extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    let wordDisplay 
    if (this.state.isLoggedIn) {
      wordDisplay = "in"
    } else {
      wordDisplay = "out"
    }

    return (
      <>
      <h1>08. React state</h1>
      <h3>You are currently logged {wordDisplay}</h3>
      </>
    )
  }
}

export default State