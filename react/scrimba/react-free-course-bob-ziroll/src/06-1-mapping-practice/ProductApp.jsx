import React from 'react';
import ProductData from "./ProductData.jsx"
import Product from "./Product.jsx"

function ProductApp() {

  const ProductComponent = ProductData.map((item) => {
    return (
    <Product key={item.id} name={item.name} price={item.price} description={item.description} />
    )
  })
  return (
    <div>
      <h1>06.1. Mapping components - Practice</h1>
      {ProductComponent}
    </div>
  )
}

export default ProductApp