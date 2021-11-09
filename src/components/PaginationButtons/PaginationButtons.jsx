import React from "react";
import Pagination from "@mui/material/Pagination";
import useStyles from "./styles";

const PaginationButtons = () => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <Pagination count={10} showFirstButton showLastButton />
    </div>
  );
};

export default PaginationButtons;
