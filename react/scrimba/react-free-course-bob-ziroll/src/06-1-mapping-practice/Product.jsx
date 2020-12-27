import React from 'react'

function Product(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <h4>Price: ${props.price}</h4>
      <h4>Description</h4>
      <p>{props.description}</p>
    </div>
  )
}

export default Product;