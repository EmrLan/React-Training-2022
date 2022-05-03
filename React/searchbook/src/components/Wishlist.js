import { Button, Card, Container, Grid, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import WishlistCard from "./WishlistCard";

function Wishlist(props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <LibraryBooksIcon />
      </Grid>
      <Grid item xs={9} textAlign="right">
        My Reading Wishlist {props.wishlist.length}
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {props.wishlist.length > 0 ? (
            props.wishlist.map((book) => {
              return (
                <Grid key={book.id} item xs={12}>
                  <WishlistCard
                    book={book}
                    page={props.page}
                    onDelete={props.onDelete}
                  />
                </Grid>
              );
            })
          ) : (
            <div></div>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Wishlist;
