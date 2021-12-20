import React, { useState, useEffect } from "react";
import "./Wishlist.css";
import {
  getWishlistItems,
  deleteWishlistItems,
} from "../../service/DataService";
import bookImage from "../../assests/homepage/bookImage.png";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Wishlist() {
  const [wish, setWish] = useState([]);
  const [myWishlist, setMyWishlist] = useState([]);

  const displayWishlistItem = () => {
    getWishlistItems()
      .then((response) => {
        console.log(response);
        const wishList = response.data.result;
        setMyWishlist(wishList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = () => {
    deleteWishlistItems()
      .then((response) => {
        console.log(response);
        displayWishlistItem();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    displayWishlistItem();
  }, []);

  return (
    <>
      <Header />
      <div className="main">
        <div className="wishlist-items">
          {myWishlist.length === 0 ? (
            <div className="empty">
              <h3>The Wishlist is Empty</h3>
            </div>
          ) : (
            myWishlist.map((product) => (
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
                        {product.product_id.bookName}
                      </Typography>
                      <Typography
                        style={{ paddingLeft: "0.7vw", paddingBottom: "1vh" }}
                        variant="body2"
                        color="text.secondary"
                        textAlign="left"
                      >
                        by {product.product_id.author}
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
                        Rs. {product.product_id.price}
                      </Typography>
                      <div
                        className="card-contents3"
                        style={{ display: "flex" }}
                      ></div>
                      <IconButton
                        onClick={handleDelete}
                        style={{
                          display: "flex",
                          marginLeft: "55vw",
                        }}
                      >
                        <DeleteIcon
                          style={{
                            color: "grey",
                            cursor: "pointer",
                          }}
                        ></DeleteIcon>
                      </IconButton>
                      <Divider />
                    </div>
                  </div>
                </div>
              </>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Wishlist;
