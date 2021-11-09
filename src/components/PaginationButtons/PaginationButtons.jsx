import React from "react";
import Pagination from "@mui/material/Pagination";
import useStyles from "./styles";

const PaginationButtons = ({ setCurrentPage, numPages }) => {
  const classes = useStyles();

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <div className={classes.content}>
      <Pagination
        count={numPages}
        onChange={handleChangePage}
        showFirstButton
        showLastButton
      />
    </div>
  );
};

export default PaginationButtons;
