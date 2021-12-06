import React, { useState } from "react";
import "./Login.css";
import home from "../../assests/logup/home.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { login } from "../../service/UserService";

function Login(props) {
  const emailRegex =
    /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [emailHelper, setEmailHelper] = useState("");
  const [passwordHelper, setPasswordHelper] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [feildObj, setFeildObj] = useState({
    email: "",
    password: "",
  });

  const takeEmail = (event) => {
    setFeildObj({ ...feildObj, email: event.target.value });
  };

  const takePassword = (event) => {
    setFeildObj({ ...feildObj, password: event.target.value });
  };

  const handlePasswordToggle = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const onSubmit = () => {
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
    login(feildObj)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(feildObj);
  };

  const changeBox = () => {
    props.listenToActive(true);
  };

  const changeBoxAgain = () => {
    props.listenToActive(false);
  };

  return (
    <div className="box">
      <div className="box1">
        <div>
          <img className="image" src={home} alt="home" />
          <h4 className="content">Online Book Shopping</h4>
        </div>
      </div>
      <div className="box2">
        <div className="box21">
          <div className="row1">
            <h3 style={{ cursor: "pointer" }} onClick={changeBox}>
              LOGIN
            </h3>
            <h3 style={{ cursor: "pointer" }} onClick={changeBoxAgain}>
              SIGNUP
            </h3>
          </div>
          <div className="row2">
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
          <div className="row3">
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
              <VisibilityOutlinedIcon
                onClick={handlePasswordToggle}
                className="VisibilityOffOutlinedIcon1"
              />
            ) : (
              <VisibilityOffOutlinedIcon
                onClick={handlePasswordToggle}
                className="VisibilityOffOutlinedIcon1"
              />
            )}
          </div>
          <div className="row4">
            <button
              style={{ width: "100%", height: "100%" }}
              className="button"
              onClick={onSubmit}
            >
              Login
            </button>
          </div>
          <div className="row5">
            <Divider style={{ marginTop: "1.5vw", marginBottom: "1.5vw" }}>
              OR
            </Divider>
          </div>
          <div className="row6">
            <Button
              fullWidth
              variant="contained"
              style={{
                textTransform: "none",
                background: "#4266B2 0% 0 % no - repeat padding- box",
                opacity: 1,
              }}
            >
              FaceBook
            </Button>
            <Button
              fullWidth
              variant="contained"
              style={{
                marginTop: "6px",
                color: "black",
                textTransform: "none",
                border: "1px solid #E4E4E4",
                background: "#F5F5F5 0% 0% no-repeat padding-box",
                opacity: 1,
              }}
            >
              Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
