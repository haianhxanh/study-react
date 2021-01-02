import React from 'react';
import Mapping from './Mapping.jsx';
import MappingData from './MappingData.jsx';

function MappingApp() {

  const MappingComponent = MappingData.map((joke) => {
    return (
      // Each child in an array or iterator should have a unique "key" prop
      <Mapping key={joke.id} question={joke.question} punchLine={joke.punchLine} />
    )
  })

  return (
    <div>
      <h1>06. Mapping Components</h1>
      {MappingComponent}
    </div>
  )


}

export default MappingApp;