import { Card, Grid, Typography } from "@mui/material";
import WishlistCard from "./WishlistCard";

function ShowlistPage(props) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {props.wishlist.length > 0 ? (
            props.wishlist.map((book) => {
              return (
                <Grid key={book.id} item xs={12}>
                  <WishlistCard book={book} page={props.page} />
                </Grid>
              );
            })
          ) : (
            <Typography variant="div">No Book In Your Wishlist</Typography>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ShowlistPage;
