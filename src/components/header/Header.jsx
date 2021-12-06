import React from "react";
import "./Header.css";
import education from "../../assests/homepage/education.svg";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Header() {
  return (
    <div className="header">
      <img src={education} alt="education" />
      <p>bookstore</p>
      <input className="search" type="search" placeholder="Search..." />
      <PermIdentityOutlinedIcon className="PermIdentityOutlinedIcon" />
      <h9>Profile</h9>
      <ShoppingCartOutlinedIcon className="ShoppingCartOutlinedIcon" />
      <h10>Cart</h10>
    </div>
  );
}

export default Header;
