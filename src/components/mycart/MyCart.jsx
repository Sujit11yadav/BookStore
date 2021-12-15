import React, { useState, useEffect } from "react";
import "./MyCart.css";
import CartItem from "./CartItem";
import { getCartItems } from "../../service/DataService";
import CustomerDetails from "./CustomerDetails";
import OrderSummary from "./OrderSummary";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import OrderPlaced from "../../pages/orderplaced/OrderPlaced";

function MyCart(props) {
  const [MycartList, setMyCartList] = useState([]);
  const [openCustomerDetails, setOpenCustomerDetails] = useState(false);
  const [openOrderDetails, setopenOrderDetails] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [showPlaced, setShowPlaced] = useState(true);

  const Checkout = () => {
    setShowPlaced(false);
  };

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
    setShowButton(false);
  };
  const displayParticularOrder = () => {
    setopenOrderDetails(true);
  };

  return (
    <>
      {showPlaced ? (
        <div className="MyCartSection">
          <div style={{ border: "2px solid #F5F5F5" }}>
            <Typography
              style={{
                paddingLeft: "0.7vw",
                fontWeight: "bold",
                marginTop: "20px",
                marginBottom: "20px",
              }}
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
              {showButton && (
                <Button
                  variant="contained"
                  id="placeorderButton"
                  onClick={displayCustomerDetails}
                >
                  Place Order
                </Button>
              )}
            </div>
          </div>
          <Divider />

          <div
            className="AddressSection"
            style={{ border: "2px solid #F5F5F5" }}
          >
            {openCustomerDetails ? (
              <CustomerDetails
                displayParticularOrder={displayParticularOrder}
              />
            ) : (
              <div>Address Details </div>
            )}
          </div>

          <div
            className="OrderSummarySection"
            style={{ border: "2px solid #F5F5F5" }}
          >
            {openOrderDetails ? (
              <div className="OrderItemBooks">
                <Typography
                  style={{
                    paddingLeft: "0.7vw",
                    fontWeight: "bold",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                  variant="h5"
                  color="black"
                  textAlign="left"
                >
                  Order Summary
                </Typography>
                {MycartList.map((bookitem) => (
                  <OrderSummary bookitem={bookitem} />
                ))}
                <Button
                  className="checkoutbutton"
                  variant="contained"
                  onClick={Checkout}
                  style={{
                    marginLeft: "45vw",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  CHECKOUT
                </Button>
              </div>
            ) : (
              <div> Order Summary</div>
            )}
          </div>
        </div>
      ) : (
        <OrderPlaced />
      )}
    </>
  );
}

export default MyCart;
