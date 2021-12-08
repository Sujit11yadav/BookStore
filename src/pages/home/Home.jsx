import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { book } from "../../service/DataService";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import StarIcon from "@mui/icons-material/Star";
import { green } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import { createTheme, IconButton, PaginationItem } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import bookImage from "../../assests/homepage/bookImage.png";
import "./Home.css";

function Home() {
  const [selection, setSelection] = React.useState("");
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(12);

  const theme = createTheme({
    palette: {
      myColor: {
        main: "#A03037",
        contrastText: "#ffffff",
      },
    },
  });

  const left = () => {
    return (
      <IconButton sx={{ border: "2px solid #E2E2E2" }}>
        <ChevronLeftRoundedIcon />
      </IconButton>
    );
  };

  const right = () => {
    return (
      <IconButton sx={{ border: "2px solid #E2E2E2" }}>
        <ChevronRightRoundedIcon />
      </IconButton>
    );
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleChange = (event) => {
    setSelection(event.target.value);
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

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
          {currentBooks.map((book) => (
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
                    Rs. {book.price}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <ThemeProvider theme={theme}>
          <Box
            sx={{ display: "flex", justifyContent: "center", margin: "25px" }}
          >
            <Pagination
              onChange={handlePageChange}
              count={Math.ceil(books.length / 12)}
              color="myColor"
              page={currentPage}
              shape="rounded"
              renderItem={(item) => (
                <PaginationItem
                  components={{ previous: left, next: right }}
                  {...item}
                />
              )}
            />
          </Box>
        </ThemeProvider>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
