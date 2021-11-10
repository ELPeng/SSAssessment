import React from "react";
import Pagination from "@mui/material/Pagination";
import useStyles from "./styles";

const PaginationButtons = ({ currentPage, setCurrentPage, numPages }) => {
  const classes = useStyles();

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <div className={classes.content}>
      <Pagination
        page={currentPage}
        count={numPages}
        onChange={handleChangePage}
      />
    </div>
  );
};

export default PaginationButtons;
