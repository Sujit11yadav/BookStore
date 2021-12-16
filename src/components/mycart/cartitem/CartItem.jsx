import React from "react";
import { cartItemQuantity, DeleteBooks } from "../../../service/DataService";
import "./CartItem.css";
import bookImage from "../../../assests/homepage/bookImage.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

function CartItem(props) {
  const updateCartQuantity = (bookitem, quantitydata) => {
    let obj = {
      quantityToBuy: quantitydata,
    };
    cartItemQuantity(props.bookitem._id, obj)
      .then((response) => {
        console.log(response);
        props.ListenToDeleteItems(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(props.bookitem._id);

  const increment = (bookobj) => {
    console.log(bookobj);
    let quantity = props.bookitem.quantityToBuy + 1;
    updateCartQuantity(bookobj, quantity);
  };

  const decrement = (bookobj) => {
    let quantity = props.bookitem.quantityToBuy - 1;
    updateCartQuantity(bookobj, quantity);
  };

  const deletebooks = (e) => {
    DeleteBooks(e.target.id)
      .then((response) => {
        console.log(response);
        props.ListenToDeleteItems(true);
      })
      .catch((error) => {
        console.log(props.bookitem._id);
        console.log(error);
      });
  };

  return (
    <>
      <div
        className="card-contents"
        style={{ display: "flex", marginBottom: "10px" }}
      >
        <div
          className="card-contents1"
          style={{ display: "flex", paddingLeft: "0.7vw" }}
        >
          <Card
            sx={{
              maxWidth: 320,
              maxHeight: 500,
              height: 100,
              width: 80,
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              border: "1px solid #E2E2E2",
              borderRadius: "3px",
              opacity: "1",
            }}
          >
            <CardContent
              style={{
                backgroundColor: "#F5F5F5",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={bookImage}
                alt="book-Image"
                style={{ height: "80px" }}
              />
            </CardContent>
          </Card>
          <div className="card-contents-2">
            <Typography
              style={{ paddingLeft: "0.7vw", fontWeight: "bold" }}
              variant="body2"
              color="black"
              textAlign="left"
            >
              {props.bookitem.product_id.bookName}
            </Typography>
            <Typography
              style={{ paddingLeft: "0.7vw", paddingBottom: "1vh" }}
              variant="body2"
              color="text.secondary"
              textAlign="left"
            >
              by {props.bookitem.product_id.author}
            </Typography>
            <Typography
              style={{
                paddingLeft: "0.7vw",
                fontWeight: "bold",
                paddingBottom: "1vh",
              }}
              variant="body2"
              color="black"
              textAlign="left"
            >
              Rs. {props.bookitem.product_id.price}
            </Typography>
            <div className="card-contents3" style={{ display: "flex" }}>
              <Stack direction="row" spacing={1} style={{ marginLeft: "8px" }}>
                <button
                  className="plus-icon"
                  onClick={() => decrement(props.bookitem)}
                  style={{
                    width: "40px",
                    height: "24px",
                    background: "#FAFAFA 0% 0% no-repeat padding-box",
                    border: "1px solid #DBDBDB",
                    opacity: "1",
                    marginTop: "3px",
                  }}
                >
                  -
                </button>
                <Avatar
                  sx={{
                    width: 50,
                    height: 28,
                    color: "black",
                    fontSize: "15px",
                    background: "#FAFAFA 0% 0% no-repeat padding-box",
                    border: "1px solid #DBDBDB",
                  }}
                  variant="square"
                >
                  {props.bookitem.quantityToBuy}
                </Avatar>
                <button
                  onClick={() => increment(props.bookitem)}
                  className="plus-icon"
                  id="plus"
                  style={{
                    width: "40px",
                    height: "24px",
                    background: "#FAFAFA 0% 0% no-repeat padding-box",
                    border: "1px solid #DBDBDB",
                    opacity: "1",
                    marginTop: "3px",
                  }}
                >
                  +
                </button>
              </Stack>
              <Button
                id={props.bookitem._id}
                onClick={deletebooks}
                color="error"
                style={{ marginLeft: "8px" }}
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
