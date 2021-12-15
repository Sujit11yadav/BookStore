import React, { useState } from "react";
import "./Header.css";
import education from "../../assests/homepage/education.svg";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Header(props) {
  const OpenMyCart = () => {
    props.ListenToCart(true);
  };

  return (
    <>
      <div className="header">
        <img src={education} alt="education" />
        <p>bookstore</p>
        <input className="search" type="search" placeholder="Search..." />
        <PermIdentityOutlinedIcon
          style={{ cursor: "pointer" }}
          className="PermIdentityOutlinedIcon"
        />
        <h9>Profile</h9>
        <ShoppingCartOutlinedIcon
          style={{ cursor: "pointer" }}
          onClick={OpenMyCart}
          className="ShoppingCartOutlinedIcon"
        />
        <h10>Cart</h10>
      </div>
    </>
  );
}

export default Header;
