import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { book } from "../../service/DataService";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import StarIcon from "@mui/icons-material/Star";
import { green } from "@mui/material/colors";
import bookImage from "../../assests/homepage/bookImage.png";
import "./Home.css";

function Home() {
  const [selection, setSelection] = React.useState("");
  const [books, setBooks] = useState([]);

  const handleChange = (event) => {
    setSelection(event.target.value);
  };

  const displayBook = () => {
    book()
      .then((response) => {
        console.log(response.data.result);
        setBooks(response.data.result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    displayBook();
  }, []);

  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="title">
          <div className="left-content">
            <span className="book">Books</span>
            <span className="items">({books.length} items)</span>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                className="sort-options"
                value={selection}
                onChange={handleChange}
                displayEmpty
                size="small"
              >
                <MenuItem style={{ display: "none" }} disabled value="">
                  Sort by relevance
                </MenuItem>
                <MenuItem style={{ fontSize: "15px" }} value={1}>
                  Price: Low to High
                </MenuItem>
                <MenuItem style={{ fontSize: "15px" }} value={2}>
                  Price: High to Low
                </MenuItem>
                <MenuItem style={{ fontSize: "15px" }} value={3}>
                  Newest Arrivals
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="display-cards">
          {books.map((book) => (
            <div className="display-books">
              <Card
                sx={{
                  maxWidth: 320,
                  maxHeight: 500,
                  height: 294,
                  width: 235,
                  background: "#FFFFFF 0% 0% no-repeat padding-box",
                  border: "1px solid #E2E2E2",
                  borderRadius: "3px",
                  opacity: "1",
                }}
              >
                <CardContent style={{ backgroundColor: "#F5F5F5" }}>
                  <img src={bookImage} alt="book Image" />
                </CardContent>
                <CardContent>
                  <Typography
                    style={{ paddingLeft: "0.7vw", fontWeight: "bold" }}
                    variant="body2"
                    color="black"
                    textAlign="left"
                  >
                    {book.bookName}
                  </Typography>
                  <Typography
                    style={{ paddingLeft: "0.7vw", paddingBottom: "1vh" }}
                    variant="body2"
                    color="text.secondary"
                    textAlign="left"
                  >
                    by {book.author}
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
                        height: 30,
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
                    Rs. {book.price}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
