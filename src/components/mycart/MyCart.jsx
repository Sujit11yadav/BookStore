import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import { getCartItems } from "../../service/DataService";
import Typography from "@mui/material/Typography";

function MyCart(props) {
  const [items, setItems] = useState([]);

  const displayCartItem = () => {
    getCartItems()
      .then((response) => {
        console.log(response);
        setItems(response.data.result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    displayCartItem();
  }, []);

  return (
    <div>
      <Header />
      <Typography
        style={{ paddingLeft: "0.7vw", paddingBottom: "1vh" }}
        variant="body2"
        color="text.secondary"
        textAlign="left"
      >
        by{" "}
        {items.map((item) => (
          <>
            <li>{item.quantityToBuy}</li>
          </>
        ))}
      </Typography>
    </div>
  );
}

export default MyCart;
