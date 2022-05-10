import {
  Button,
  Card,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { Box } from "@mui/system";
import _ from "lodash";
import { useCallback, useEffect, useState } from "react";
import { searchbook } from "../../Apis/Searchbook";
import uuid from "react-uuid";

function SearchBox(props) {
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [hideDropBox, setHideDropBox] = useState(true);

  const cachedDebounceFn = useCallback(
    _.debounce((input) => {
      const result = searchbook(input, 1, 10);
      result.then((result) => {
        if (result?.data?.items) {
          setSearchResult(result.data.items);
          setHideDropBox(false);
        }
      });
      // result.finally(()=>{
      //   console.log(searchResult)
      // });
    }, 500),
    []
  );

  useEffect(() => {
    if (input !== "") cachedDebounceFn(input);
  }, [cachedDebounceFn, input]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const submitButton = () => {
    props.onChange(input);
  };

  const onInputBoxBlur = () => {
    setHideDropBox(true);
  };

  const onInputBoxFocus = () => {
    if (searchResult.length > 0 && input !== "") setHideDropBox(false);
  };

  const listSelect = (event) => {
    props.onChange(event.target.title);
    setHideDropBox(true);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <TextField
          className="searchBox"
          label="Search Book"
          defaultValue={props.value}
          onBlur={onInputBoxBlur}
          onFocus={onInputBoxFocus}
          onChange={onInputChange}
        />
        <Grid container >
          <Grid item xs={12} className="grid">
            <Card hidden={hideDropBox} className="Card">
              <Grid container>
                <Grid item xs={12}>
                  <List>
                    {searchResult.length !== 0 ? (
                      searchResult.map((book) => {
                        return (
                          <ListItem key={uuid()} disablePadding>
                            <ListItemButton
                              component="button"
                              onMouseDown={listSelect}
                              title={book.volumeInfo.title}
                            >
                              {book.volumeInfo.title}
                            </ListItemButton>
                          </ListItem>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </List>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={4}>
        <Button variant="contained" onClick={submitButton}>
          Search
        </Button>
      </Grid>
      <Grid>
        <Grid item xs={8}></Grid>
      </Grid>
    </Grid>
  );
}

export default SearchBox;
