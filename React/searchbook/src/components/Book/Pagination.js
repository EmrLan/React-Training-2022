import { Button, Grid, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Pagination({ currentPage, setCurrentPage, totalPages }) {
  const onIncrementCurrentPage = () => {
    if (currentPage >= totalPages) return;
    setCurrentPage((prev) => {
      return prev + 1;
    });
  };
  const onDecrementCurrentPage = () => {
    if (currentPage <= 1) return;
    setCurrentPage((prev) => {
      return prev - 1;
    });
  };

  const onButtonClick = (input) => {
    setCurrentPage(Number(input.target.id));
  };

  const PrevButton = (
    <Button
      variant="outlined"
      onClick={onDecrementCurrentPage}
      disabled={currentPage <= 1}
    >
      <KeyboardArrowLeftIcon />
    </Button>
  );
  const NextButton = (
    <Button
      variant="outlined"
      onClick={onIncrementCurrentPage}
      disabled={currentPage >= totalPages}
    >
      <KeyboardArrowRightIcon />
    </Button>
  );

  const FirstButton = (
    <Button id="1" onClick={onButtonClick} disabled={currentPage <= 1}>
      1
    </Button>
  );
  const LastButton = (
    <Button
      id={totalPages}
      onClick={onButtonClick}
      disabled={currentPage >= totalPages}
    >
      {totalPages}
    </Button>
  );

  const LeftDots =
    currentPage > 4 ? (
      <Button disabled={true}>
        <strong>...</strong>
      </Button>
    ) : (
      <></>
    );
  const RightDots =
    currentPage + 3 < totalPages ? (
      <Button disabled={true}>
        <strong>...</strong>
      </Button>
    ) : (
      <></>
    );

  const PrevToCurButton =
    currentPage > 2 ? (
      <Button id={currentPage - 1} onClick={onButtonClick}>
        {currentPage - 1}
      </Button>
    ) : (
      <></>
    );
  const SecondLeftToCurButton =
    currentPage > 3 ? (
      <Button id={currentPage - 2} onClick={onButtonClick}>
        {currentPage - 2}
      </Button>
    ) : (
      <></>
    );
  const CurrentButton =
    currentPage > 1 && currentPage < totalPages ? (
      <Button variant="outlined" disabled={true}>
        {currentPage}
      </Button>
    ) : (
      <></>
    );
  const NextToCurButton =
    currentPage + 1 < totalPages ? (
      <Button id={currentPage + 1} onClick={onButtonClick}>
        {currentPage + 1}
      </Button>
    ) : (
      <></>
    );
  const SecondRightToCurButton =
    currentPage + 2 < totalPages ? (
      <Button id={currentPage + 2} onClick={onButtonClick}>
        {currentPage + 2}
      </Button>
    ) : (
      <></>
    );

  return (
    <Grid container justifyContent="center">
      <Grid item>{PrevButton}</Grid>
      <Grid item>{FirstButton}</Grid>

      <Grid item>{LeftDots}</Grid>

      <Grid item>{SecondLeftToCurButton}</Grid>

      <Grid item>{PrevToCurButton}</Grid>

      <Grid item>{CurrentButton}</Grid>

      <Grid item>{NextToCurButton}</Grid>

      <Grid item>{SecondRightToCurButton}</Grid>

      <Grid item>{RightDots}</Grid>

      <Grid item>{LastButton}</Grid>
      <Grid item>{NextButton}</Grid>
    </Grid>
  );
}

export default Pagination;
