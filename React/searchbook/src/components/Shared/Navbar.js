import { Button } from "@mui/material";

function Navbar(props) {
  return (
    <>
      <Button id="0" onClick={props.switch}>
        Home
      </Button>
      <Button id="1" onClick={props.switch}>
        Show Wishlist
      </Button>
    </>
  );
}

export default Navbar;
