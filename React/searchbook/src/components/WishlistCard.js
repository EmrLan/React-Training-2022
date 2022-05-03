import { Button, Card, Grid, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

function WishlistCard(props) {
  return (
    <Card variant="outlined">
      <Grid container>
        {props.page === 0 ? (
          <Grid item xs={2}>
            <Button id={props.book.id} onClick={props.onDelete}>
              <ClearIcon className="nonClickable" />
            </Button>
          </Grid>
        ) : (
          <></>
        )}
        <Grid item xs={10}>
          <Typography component="span">
            {props.book.volumeInfo.title}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

export default WishlistCard;
