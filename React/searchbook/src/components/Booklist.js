import { Grid } from "@mui/material";
import BookCard from "./BookCard";

function Booklist(props) {
  return (
    <Grid container spacing={2}>
      {props.booklist !== undefined ? (
        props.booklist.map((book) => {
          return (
            <Grid key={book.id} item xs={12}>
              <BookCard book={book} onSelection={props.onSelection} />
            </Grid>
          );
        })
      ) : (
        <div></div>
      )}
    </Grid>
  );
}

export default Booklist;
