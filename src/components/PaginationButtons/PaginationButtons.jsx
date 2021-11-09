import React from "react";
import Pagination from "@mui/material/Pagination";
import useStyles from "./styles";

const PaginationButtons = ({ currentPage, setCurrentPage }) => {
  const classes = useStyles();

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <div className={classes.content}>
      <Pagination
        count={10}
        onChange={handleChangePage}
        showFirstButton
        showLastButton
      />
    </div>
  );
};

export default PaginationButtons;
