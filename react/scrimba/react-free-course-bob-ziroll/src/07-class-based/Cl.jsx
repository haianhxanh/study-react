import React from 'react';

class Cl extends React.Component {
  // any of our methods should go before render, and we can call them in render
  myMethod() {
  }

  render() {
    // calling my method before return
    const style = this.myMethod()

    return (
    <h1>07. Class-based component</h1>
    )}
}

export default Cl