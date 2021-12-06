import React from "react";
import "./SignUp.css";
import home from "../../assests/logup/home.png";
import TextField from "@mui/material/TextField";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

function SignUp() {
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
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
            />
          </div>
          <div className="rowC">
            <TextField
              style={{ width: "100%", height: "100%" }}
              id="outlined-basic"
              label="Email Id"
              variant="outlined"
            />
          </div>
          <div className="rowD">
            <TextField
              style={{ width: "100%", height: "100%" }}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <VisibilityOffOutlinedIcon className="VisibilityOffOutlinedIcon" />
          </div>
          <div className="rowE">
            <TextField
              style={{ width: "100%", height: "100%" }}
              id="outlined-basic"
              label="Mobile Number"
              variant="outlined"
            />
          </div>
          <div className="rowF">
            <button
              style={{ width: "100%", height: "100%" }}
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
