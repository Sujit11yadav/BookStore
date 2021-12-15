import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import StarIcon from "@mui/icons-material/Star";
import { green } from "@mui/material/colors";
import bookImage from "../../assests/homepage/bookImage.png";
import "./Home.css";

function Home(props) {
  const Showbookdata = (data) => {
    console.log(data);
    props.ListenToBookList(data);
    props.ListentoSwitchbook(true);
  };

  return (
    <div>
      <div className="display-cards" onClick={() => Showbookdata(props.book)}>
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
              <img src={bookImage} alt="book-Image" />
            </CardContent>
            <CardContent>
              <Typography
                style={{ paddingLeft: "0.7vw", fontWeight: "bold" }}
                variant="body2"
                color="black"
                textAlign="left"
              >
                {props.book.bookName}
              </Typography>
              <Typography
                style={{ paddingLeft: "0.7vw", paddingBottom: "1vh" }}
                variant="body2"
                color="text.secondary"
                textAlign="left"
              >
                by {props.book.author}
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
                Rs. {props.book.price}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
