import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import Navbar from "../Shared/Navbar";
import Wishlist from "../Wishlist/Wishlist";
import React, { useState, useEffect } from "react";
import Booklist from "../Book/Booklist";
import "../../stylesheets/style.css";
import SearchBox from "../Book/SearchBox";
import { searchbook } from "../../Apis/Searchbook";
import ShowWishlist from "../Wishlist/ShowWishlist";
import _ from "lodash";
import Pagination from "../Book/Pagination";

function Home() {
  const [state, setState] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [view, setView] = useState(0);
  const [value, setValue] = useState("");
  const [totalPages, setTotalpages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    if (value === "") return;
    const result = searchbook(value, currentPage, itemsPerPage);
    result.then((result) => {
      if (result?.data?.items) {
        setState(result.data.items);
      }
      else
      {
        setState([]);
        setTotalpages(0);
      }
      if (result?.data?.totalItems) {
        setTotalpages( Math.ceil( result.data.totalItems / itemsPerPage));
      }
    });
  }, [value,currentPage]);

  const switchPage = (event) => {
    setView(Number(event.target.id));
  };

  const handleChange = (input) => {
    setValue(input);
    setCurrentPage(1);
  };

  const onBookSelection = (event) => {
    if (
      !wishlist.includes(
        state.filter((book) => {
          return book.id === event.target.id;
        })[0]
      )
    ) {
      setWishlist((prev) => {
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
    setWishlist(
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

        {view === 0 ? (
          <>
            <Grid item xs={12}>
              <SearchBox value={value} onChange={handleChange} />
            </Grid>

            <Grid item xs={8}>
              <Card variant="outlined">
                <CardContent>
                  <Booklist
                    booklist={state}
                    onSelection={onBookSelection}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    setCurrentPage={setCurrentPage}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Wishlist
                wishlist={wishlist}
                view={view}
                onDelete={onDeleteWishlist}
              />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={6}>
              <Card variant="outlined">
                <CardContent>
                  <ShowWishlist wishlist={wishlist} view={view} />
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
