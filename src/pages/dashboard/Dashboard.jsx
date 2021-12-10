import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Home from "../home/Home";
import { book } from "../../service/DataService";
import AboutBook from "../../components/aboutbook/AboutBook";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Dashboard(props) {
  const [books, setBooks] = useState([]);
  const [booklist, setbooklist] = useState("");
  const [switchbookcart, setswitchbookcart] = useState(false);
  const [selection, setSelection] = useState("");

  const handleChange = (event) => {
    setSelection(event.target.value);
  };

  const ListentoSwitchbook = (data) => {
    if (data === true) {
      setswitchbookcart(true);
    }
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

  const ListenToBookList = (data) => {
    console.log(data);
    setbooklist(data);
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
        <div className="Dashboard">
          {switchbookcart ? (
            <AboutBook booklist={booklist} />
          ) : (
            books.map((book) => (
              <Home
                book={book}
                ListenToBookList={ListenToBookList}
                ListentoSwitchbook={ListentoSwitchbook}
              />
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
