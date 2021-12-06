import React from "react";
import "./Login.css";
import home from "../../assests/logup/home.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

function Login() {
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
            <h3>LOGIN</h3>
            <h3>SIGNUP</h3>
          </div>
          <div className="row2">
            <TextField
              style={{ width: "100%", height: "100%" }}
              id="outlined-basic"
              label="Email Id"
              variant="outlined"
            />
          </div>
          <div className="row3">
            <TextField
              style={{ width: "100%", height: "100%" }}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </div>
          <div className="row4">
            <button
              style={{ width: "100%", height: "100%" }}
              className="button"
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
