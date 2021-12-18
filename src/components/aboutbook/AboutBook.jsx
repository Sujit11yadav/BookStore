import React, { useState, useEffect } from "react";
import bookImage from "../../assests/homepage/bookImage.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import StarIcon from "@mui/icons-material/Star";
import { green } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  getCartItems,
  addCartItems,
  cartItemQuantity,
  addWishlistItems,
  getWishlistItems,
} from "../../service/DataService";

function AboutBook(props) {
  const [getcartid, setgetcartid] = useState([]);
  const [value, setValue] = useState(2);
  const [quantityToBuy, setQuantityToBuy] = useState(0);
  const [cartProductId, setCartProductId] = useState("");
  const [getWishlistId, setGetWishlistId] = useState([]);

  const displayCartItems = () => {
    getCartItems()
      .then((response) => {
        console.log(response);
        let filterArray = response.data.result.filter(function (cart) {
          if (props.booklist._id === cart.product_id._id) {
            setQuantityToBuy(cart.quantityToBuy);
            setCartProductId(cart._id);
            console.log(cart.product_id._id);
            return cart;
          }
        });
        setgetcartid(filterArray);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const displayWishlistItems = () => {
    getWishlistItems()
      .then((response) => {
        console.log(response);
        let filterWishlistArray = response.data.result.filter(function (
          wishlist
        ) {
          if (props.booklist._id === wishlist.product_id._id) {
            console.log(wishlist.product_id._id);
            return wishlist;
          }
        });
        setGetWishlistId(filterWishlistArray);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(cartProductId);

  const handleIncrement = () => {
    let quantity = quantityToBuy + 1;
    let data = {
      quantityToBuy: quantity,
    };
    cartItemQuantity(cartProductId, data)
      .then((response) => {
        console.log(response);
        getCartItems().then((response) => {
          let resultArray = response.data.result.filter(function (cartObj) {
            console.log(cartObj, cartProductId);
            if (cartObj._id === cartProductId) {
              return cartObj;
            }
          });
          console.log(resultArray);
          setQuantityToBuy(resultArray[0].quantityToBuy);
        });
        console.log(cartProductId);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDecrement = () => {
    let quantity = quantityToBuy - 1;
    let data = {
      quantityToBuy: quantity,
    };
    cartItemQuantity(cartProductId, data)
      .then((response) => {
        console.log(response);
        getCartItems().then((response) => {
          let resultArray = response.data.result.filter(function (cartObj) {
            console.log(cartObj, cartProductId);
            if (cartObj._id === cartProductId) {
              return cartObj;
            }
          });
          console.log(resultArray);
          setQuantityToBuy(resultArray[0].quantityToBuy);
        });
        console.log(cartProductId);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const productId = () => {
    addCartItems(props.booklist._id)
      .then((response) => {
        console.log(response);
        getCartItems();
        displayCartItems();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addToWishlist = () => {
    addWishlistItems(props.booklist._id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    displayCartItems();
    displayWishlistItems();
  }, [quantityToBuy]);

  return (
    <div>
      <div className="main-content1">
        <div className="display-cards">
          <div className="display-books">
            <Card
              sx={{
                maxWidth: 320,
                maxHeight: 500,
                height: 394,
                width: 335,
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                border: "1px solid #E2E2E2",
                borderRadius: "3px",
                opacity: "1",
              }}
            >
              <CardContent
                style={{
                  alignContent: "center",
                }}
              >
                <img
                  src={bookImage}
                  alt="book Image"
                  style={{ height: "340px" }}
                />
              </CardContent>
            </Card>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "5px",
              }}
            >
              {getcartid.length !== 0 ? (
                <Stack direction="row" spacing={1}>
                  <button
                    className="plus-icon"
                    id={props.booklist._id}
                    onClick={handleDecrement}
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
                    {quantityToBuy}
                  </Avatar>
                  <button
                    id={props.booklist._id}
                    onClick={handleIncrement}
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
              ) : (
                <Button
                  onClick={productId}
                  fullWidth
                  style={{
                    backgroundColor: "#A03037",
                    marginBottom: "30px",
                    width: "150px",
                    height: "40px",
                  }}
                  variant="contained"
                >
                  ADD TO BAG
                </Button>
              )}
              {getWishlistId.length !== 0 ? (
                <Button
                  fullWidth
                  style={{
                    backgroundColor: "#333333",
                    marginBottom: "30px",
                    width: "150px",
                    height: "40px",
                  }}
                  variant="contained"
                >
                  Added To Wishlist
                </Button>
              ) : (
                <Button
                  fullWidth
                  style={{
                    backgroundColor: "#333333",
                    marginBottom: "30px",
                    width: "150px",
                    height: "40px",
                  }}
                  variant="contained"
                  onClick={addToWishlist}
                >
                  Wishlist
                </Button>
              )}
            </div>
          </div>
          <div className="display-detail" style={{ marginLeft: "10px" }}>
            <Box sx={{ width: "100%", maxWidth: 500 }}>
              <Typography
                variant="h4"
                style={{ paddingLeft: "0.7vw", fontWeight: "bold" }}
                color="black"
                textAlign="left"
              >
                {props.booklist.bookName}
              </Typography>
              <Typography
                variant="h5"
                style={{ paddingLeft: "0.7vw", paddingBottom: "1vh" }}
                color="text.secondary"
                textAlign="left"
              >
                {props.booklist.author}
              </Typography>
              <Typography
                style={{ paddingLeft: "0.7vw" }}
                variant="body2"
                color="black"
              >
                <Avatar
                  sx={{
                    textAlign: "left",
                    bgcolor: green[700],
                    width: 60,
                    height: 20,
                    font: "normal normal bold 18px/13px Roboto",
                  }}
                  variant="rounded"
                >
                  4.5
                  <StarIcon sx={{ m: 0.4, width: 18 }} />
                </Avatar>
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
                Rs. {props.booklist.price}
              </Typography>
              <Divider variant="middle" />
              <Typography
                sx={{ p: 2 }}
                variant="h5"
                style={{ paddingLeft: "0.7vw", paddingBottom: "1vh" }}
                color="text.secondary"
                textAlign="left"
              >
                Book Detail
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
              <Divider variant="middle" />
              <Typography
                sx={{ p: 2 }}
                variant="h5"
                style={{ paddingLeft: "0.7vw", paddingBottom: "1vh" }}
                color="text.primary"
                textAlign="left"
              >
                Customer Feedback
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    maxWidth: 500,
                    backgroundColor: "#F5F5F5",
                    marginTop: "5px",
                  }}
                >
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
                    Overall Rating
                  </Typography>
                  <Rating
                    style={{
                      paddingLeft: "0.7vw",
                      paddingBottom: "1vh",
                    }}
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    placeholder="Write your review"
                    style={{
                      marginLeft: "0.7vw",
                      marginRight: "0.7vw",
                      backgroundColor: "white",
                    }}
                  />
                  <Button
                    style={{
                      width: "76px",
                      height: "24px",
                      marginTop: "1vh",
                      marginLeft: "28vw",
                    }}
                    variant="contained"
                  >
                    Submit
                  </Button>
                </Box>
              </Typography>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBook;
