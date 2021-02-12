import React, { useEffect } from "react";

const Modal = ({ modalContent, closeModal }) => {
  // run closeModal after 3 seconds
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });

  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
