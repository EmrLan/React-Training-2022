import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  createStyles,
  Grid,
  Typography,
} from "@mui/material";
// import { makeStyles } from '@mui/material/styles';

// const useStyles = makeStyles(() => 
// createStyles({
//   nonClickable: {
//     PointerEvent: 'none',
//   },
// }));

function BookCard(props) {
  // const classes = useStyles();
  
  return (
    <Card variant="outlined">
      <CardActionArea id={props.book.id} onClick={props.onSelection}>
        <Grid className="nonClickable" container spacing={2}>
          <Grid item xs={2}>
            {props?.book?.volumeInfo?.imageLinks?.thumbnail?(
               <CardMedia
               component="img"
               src={props.book.volumeInfo.imageLinks.thumbnail}
               alt={props.book.volumeInfo.title}
             />
            ):(<></>)}
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h5">
              <strong>{props.book.volumeInfo.title}</strong>
            </Typography>

            <Typography variant="subtitle1" component="div">
              {props.book.volumeInfo.authors ? (
                <div>
                  <strong>Author:</strong> {props.book.volumeInfo.authors}
                </div>
              ) : (
                <div></div>
              )}
            </Typography>

            <Typography variant="subtitle1" component="div">
              {props.book.volumeInfo.publisher ? (
                <div>
                  <strong>Publisher:</strong> {props.book.volumeInfo.publisher}
                </div>
              ) : (
                <div></div>
              )}
            </Typography>

            <Typography variant="subtitle1" component="div">
              {props.book.volumeInfo.publishedDate ? (
                <div>
                  <strong>Publisher Date:</strong>{" "}
                  {props.book.volumeInfo.publishedDate}
                </div>
              ) : (
                <div></div>
              )}
            </Typography>

            <Typography variant="body2" component="div">
              {props.book.volumeInfo.description ? (
                <div>
                  <strong>Description:</strong>{" "}
                  {props.book.volumeInfo.description}
                </div>
              ) : (
                <div></div>
              )}
            </Typography>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}

export default BookCard;
