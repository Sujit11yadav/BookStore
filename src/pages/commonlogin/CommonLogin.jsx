import React, { useState } from "react";
import Login from "../login/Login";
import SignUp from "../signup/SignUp";

function CommomLogin() {
  const [active, setActive] = useState(false);

  const listenToActive = (data) => {
    if (data === true) {
      setActive(true);
    } else if (data === false) {
      setActive(false);
    }
  };

  return (
    <div className="Common-Login">
      {active ? (
        <Login className="Log" listenToActive={listenToActive} />
      ) : (
        <SignUp className="Sign" listenToActive={listenToActive} />
      )}
    </div>
  );
}

export default CommomLogin;
