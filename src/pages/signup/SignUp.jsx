import React, { useState } from "react";
import "./SignUp.css";
import home from "../../assests/logup/home.png";
import TextField from "@mui/material/TextField";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { registration } from "../../service/UserService";

function SignUp() {
  const fullNameRegex = /[A-Z]{1}[a-z]{2,}/;
  const emailRegex =
    /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [fullHelper, setFullHelper] = useState("");
  const [fullError, setFullError] = useState(false);
  const [emailHelper, setEmailHelper] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordHelper, setPasswordHelper] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [phoneHelper, setPhoneHelper] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [feildObj, setFeildObj] = useState({
    fullName: "",
    email: "",
    service: "advance",
    password: "",
    phone: "",
  });

  const takeFullName = (event) => {
    setFeildObj({ ...feildObj, fullName: event.target.value });
  };

  const takeEmail = (event) => {
    setFeildObj({ ...feildObj, email: event.target.value });
  };

  const takePassword = (event) => {
    setFeildObj({ ...feildObj, password: event.target.value });
  };

  const takePhone = (event) => {
    setFeildObj({ ...feildObj, phone: event.target.value });
  };

  const handlePasswordToggle = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const onSubmit = () => {
    if (fullNameRegex.test(feildObj.fullName)) {
      setFullError(false);
      setFullHelper("");
    } else {
      setFullError(true);
      setFullHelper("Enter first name");
    }
    if (emailRegex.test(feildObj.email)) {
      setEmailError(false);
      setEmailHelper("");
    } else {
      setEmailError(true);
      setEmailHelper("Enter an email or phone number");
    }
    if (passwordRegex.test(feildObj.password)) {
      setPasswordError(false);
      setPasswordHelper("");
    } else {
      setPasswordError(true);
      setPasswordHelper("Enter a password");
    }
    registration(feildObj)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(feildObj);
  };

  return (
    <div className="label">
      <div className="label1">
        <div>
          <img className="image1" src={home} alt="home" />
          <h4 className="content1">Online Book Shopping</h4>
        </div>
      </div>
      <div className="label2">
        <div className="box22">
          <div className="rowA">
            <h3>LOGIN</h3>
            <h3>SIGNUP</h3>
          </div>
          <div className="rowB">
            <TextField
              style={{ width: "100%", height: "100%" }}
              onChange={takeFullName}
              error={fullError}
              helperText={fullHelper}
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
            />
          </div>
          <div className="rowC">
            <TextField
              style={{ width: "100%", height: "100%" }}
              onChange={takeEmail}
              error={emailError}
              helperText={emailHelper}
              id="outlined-basic"
              label="Email Id"
              variant="outlined"
            />
          </div>
          <div className="rowD">
            <TextField
              style={{ width: "100%", height: "100%" }}
              onChange={takePassword}
              error={passwordError}
              helperText={passwordHelper}
              id="outlined-password-input"
              label="Password"
              type={passwordVisibility ? "text" : "password"}
              autoComplete="current-password"
            />
            {passwordVisibility ? (
              <VisibilityOffOutlinedIcon
                onClick={handlePasswordToggle}
                className="VisibilityOffOutlinedIcon"
              />
            ) : (
              <VisibilityOutlinedIcon
                onClick={handlePasswordToggle}
                className="VisibilityOffOutlinedIcon"
              />
            )}
          </div>
          <div className="rowE">
            <TextField
              style={{ width: "100%", height: "100%" }}
              onChange={takePhone}
              error={phoneError}
              helperText={phoneHelper}
              id="outlined-basic"
              label="Mobile Number"
              variant="outlined"
            />
          </div>
          <div className="rowF">
            <button
              style={{ width: "100%", height: "100%" }}
              onClick={onSubmit}
              className="button1"
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
