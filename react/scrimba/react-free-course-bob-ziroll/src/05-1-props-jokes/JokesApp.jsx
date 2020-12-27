import React from 'react';
import Jokes from './Jokes.jsx';

function JokesApp() {
  return (
    <div>
      <h1>05.1. Props - Jokes App, Props and Styling practice</h1>
      <Jokes  
        question="Did you hear about the mathematician who's afraid of negative numbers?" 
        punchLine="He'll stop at nothing to avoid them!" />
      {/* <Jokes  
        question="Hear about the new restaurant called Karma?" 
        punchLine="There’s no menu: You get what you deserve." />
      <Jokes  
        question="Did you hear about the actor who fell through the floorboards?" 
        punchLine="He was just going through a stage." />
      <Jokes  
        question="Did you hear about the claustrophobic astronaut?" 
        punchLine="He just needed a little space." /> */}
      <Jokes  
        // question="What's the best thing about Switzerland" 
        punchLine="I don't know, but the flag is a big plus!" />
    </div>
  )
}

export default JokesApp;