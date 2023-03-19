import { useState } from "react";

const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue);

  const toggle = () => {
    setShow(!show);
  };

  // can be returned as array or object
  // return [show, toggle];
  return { show, toggle };
};

export default useToggle;
