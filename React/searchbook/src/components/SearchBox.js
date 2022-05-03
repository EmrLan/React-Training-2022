import { Grid, TextField } from "@mui/material";

function SearchBox(props) {
  return (
    <Grid container>
      <Grid item xs={4}>
        <TextField
          className="searchBox"
          label="Search Book"
          defaultValue={props.value}
          onChange={props.onChange}
        />
      </Grid>
    </Grid>
  );
}

export default SearchBox;
