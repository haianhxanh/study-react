import React from 'react';

function Jokes(props) {
  return (
  <div>
    <h3 style={{display: !props.question && "none"}}>Question:</h3>
    <p>{props.question}</p>
    <h3>Answer:</h3>
    <p>{props.punchLine}</p>
  </div>
  )
}

export default Jokes
