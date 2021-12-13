import React, { useState } from "react";
import "./Header.css";
import education from "../../assests/homepage/education.svg";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import MyCart from "../mycart/MyCart";

function Header() {
  const [switchToCart, setSwitchToCart] = useState(false);
  const [cartList, setCartList] = useState("");

  const ListentoCart = (data) => {
    if (data === true) {
      setSwitchToCart(true);
    }
  };

  return (
    <>
      <div className="header">
        <img src={education} alt="education" />
        <p>bookstore</p>
        <input className="search" type="search" placeholder="Search..." />
        <PermIdentityOutlinedIcon className="PermIdentityOutlinedIcon" />
        <h9>Profile</h9>
        <ShoppingCartOutlinedIcon
          onClick={ListentoCart}
          className="ShoppingCartOutlinedIcon"
        />
        <h10>Cart</h10>
      </div>
      <div className="Cart">
        {switchToCart === true && <MyCart cartList={cartList} />}
      </div>
    </>
  );
}

export default Header;
