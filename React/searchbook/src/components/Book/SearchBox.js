import { Grid, TextField } from "@mui/material";
import _ from "lodash";
import { useCallback, useEffect, useState } from "react";

function SearchBox(props) {
  const [input, setInput] = useState("");

  const cachedDebounceFn = useCallback(_.debounce((input) => {
    props.onChange(input);
  }, 2000),[]);

  useEffect(() => {
    if (input !== "") cachedDebounceFn(input);
  }, [cachedDebounceFn, input]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <Grid container>
      <Grid item xs={4}>
        <TextField
          className="searchBox"
          label="Search Book"
          defaultValue={props.value}
          onChange={onInputChange}
        />
      </Grid>
    </Grid>
  );
}

export default SearchBox;
