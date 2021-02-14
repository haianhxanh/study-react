import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ image, name, price }) => {
  // checking on nested object
  // if image exists, only then get image.url
  const url = image && image.url;

  return (
    <article className="product">
      <h4>{name}</h4>
      <img src={url || defaultImage} alt={name || "default name"} />
      <p>${price || 3.99}</p>
    </article>
  );
};

// set the types of properties, if a property is missing, the console will alert us
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// set up default types in case any property/value is missing
// -- A) method
// Product.defaultProps = {
//   name: "default name",
//   price: 3.99,
//   image: defaultImage,
// };
export default Product;
