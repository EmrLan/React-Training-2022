import { Grid } from "@mui/material";
import BookCard from "../Book/BookCard";
import Pagination from "./Pagination";

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

      {props.totalPages > 1 ? (
        <Grid item xs={12}>
          <Pagination
            currentPage={props.currentPage}
            totalPages={props.totalPages}
            setCurrentPage={props.setCurrentPage}
          />
        </Grid>
      ) : (
        <></>
      )}
    </Grid>
  );
}

export default Booklist;
