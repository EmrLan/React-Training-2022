import { Card, Grid, Typography } from "@mui/material";
import WishlistCard from "../Shared/WishlistCard";
import uuid from "react-uuid";

function ShowWishlist(props) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {props.wishlist.length > 0 ? (
            props.wishlist.map((book) => {
              return (
                <Grid key={uuid} item xs={12}>
                  <WishlistCard book={book} view={props.view} />
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

export default ShowWishlist;
