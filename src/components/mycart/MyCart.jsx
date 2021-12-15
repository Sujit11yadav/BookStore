import React, { useState, useEffect } from "react";
import "./MyCart.css";
import CartItem from "./CartItem";
import { getCartItems } from "../../service/DataService";
import Header from "../header/Header";
import CustomerDetails from "./CustomerDetails";
import OrderSummary from "./OrderSummary";
import bookImage from "../../assests/homepage/bookImage.png";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

function MyCart(props) {
  const [MycartList, setMyCartList] = useState([]);
  const [openCustomerDetails, setOpenCustomerDetails] = useState(false);
  const [openOrderDetails, setopenOrderDetails] = useState(false);

  const getCartItem = () => {
    getCartItems()
      .then((response) => {
        console.log(response);
        const itemsList = response.data.result;
        setMyCartList(itemsList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCartItem();
  }, []);

  const displayCustomerDetails = () => {
    setOpenCustomerDetails(true);
  };
  const displayParticularOrder = () => {
    setopenOrderDetails(true);
  };

  return (
    <div className="MyCartSection">
      <div style={{ border: "1px solid black" }}>
        <Typography
          style={{ paddingLeft: "0.7vw", fontWeight: "bold" }}
          variant="h5"
          color="black"
          textAlign="left"
        >
          My Cart({MycartList.length})
        </Typography>
        <div className="CartItemBooks">
          {MycartList.map((bookitem) => (
            <CartItem bookitem={bookitem} getCartItem={getCartItem} />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "20px",
            marginBottom: "20px",
          }}
        >
          <Button
            variant="contained"
            id="placeorderButton"
            onClick={displayCustomerDetails}
          >
            Place Order
          </Button>
        </div>
      </div>
      <Divider />

      <div className="AddressSection" style={{ border: "1px solid black" }}>
        {openCustomerDetails ? (
          <CustomerDetails displayParticularOrder={displayParticularOrder} />
        ) : (
          <div>Address Details </div>
        )}
      </div>

      <div
        className="OrderSummarySection"
        style={{ border: "1px solid black" }}
      >
        {openOrderDetails ? (
          <div className="OrderItemBooks">
            {
              MycartList.map((bookitem) => (
                <OrderSummary bookitem={bookitem} />
              ))

              // MycartList.map((bookitem) => <CartItem bookitem={bookitem} getCartItem={getCartItem} />)
            }
          </div>
        ) : (
          <div> Order Summary</div>
        )}
      </div>
    </div>
  );
}

export default MyCart;
