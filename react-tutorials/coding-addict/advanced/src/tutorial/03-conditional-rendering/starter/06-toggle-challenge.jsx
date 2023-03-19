import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  // function
  // const toggleAlert = () => {
  //   if (showAlert) {
  //     setShowAlert(false);
  //     return;
  //   }
  //   setShowAlert(true);
  // };

  return (
    <>
      <h2>toggle challenge</h2>
      {/* <button className="btn" onClick={toggleAlert}>
        toggle
      </button> */}

      {/* one liner */}
      <button className="btn" onClick={() => setShowAlert(!showAlert)}>
        toggle
      </button>

      {showAlert && <Alert />}
    </>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">danger</div>;
};

export default ToggleChallenge;
