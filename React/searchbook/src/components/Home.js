import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import Navbar from "./Navbar";
import Wishlist from "./Wishlist";
import React, { useState, useEffect } from "react";
import Booklist from "./Booklist";
import "../stylesheets/style.css";
import ShowlistPage from "./ShowlistPage";
import SearchBox from "./SearchBox";

function Home() {
  const [state, setstate] = useState([]);
  const [wishlist, setwishlist] = useState([]);
  const [page, setpage] = useState(0);
  const [value, setvalue] = useState("");

  useEffect(() => {
    console.log("FETCH");
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=bookname&startIndex=0&maxResults=20"
    )
      .then((response) => response.json())
      .then((data) => {
        if (value === "") setstate(data.items);
        else {
          setstate(
            data.items.filter((item) => {
              return item.volumeInfo.title
                .toLowerCase()
                .includes(value.toLowerCase());
            })
          );
        }
      });
  }, [value]);

  const switchPage = (event) => {
    setpage(Number(event.target.id));
  };

  const handleChange = (event) => {
    setvalue(event.target.value);
  };

  const onBookSelection = (event) => {
    if (
      !wishlist.includes(
        state.filter((book) => {
          return book.id === event.target.id;
        })[0]
      )
    ) {
      setwishlist((prev) => {
        return [
          ...prev,
          state.filter((book) => {
            return book.id === event.target.id;
          })[0],
        ];
      });
    }
  };

  const onDeleteWishlist = (event) => {
    setwishlist(
      wishlist.filter((book) => {
        return book.id !== event.target.id;
      })
    );
  };

  return (
    <Container maxWidth="false">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navbar switch={switchPage} />
        </Grid>

        {page === 0 ? (
          <>
            <Grid item xs={12}>
              <SearchBox value={value} onChange={handleChange} />
            </Grid>

            <Grid item xs={8}>
              <Card variant="outlined">
                <CardContent>
                  <Booklist booklist={state} onSelection={onBookSelection} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Wishlist
                wishlist={wishlist}
                page={page}
                onDelete={onDeleteWishlist}
              />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={6}>
              <Card variant="outlined">
                <CardContent>
                  <ShowlistPage wishlist={wishlist} page={page} />
                </CardContent>
              </Card>
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
}

export default Home;
