import React from "react";
import Pagination from "@mui/material/Pagination";
import useStyles from "./styles";

const PaginationButtons = ({ currentPage, setCurrentPage, numPages }) => {
  const classes = useStyles();
  let isMobile = window.innerWidth < 800;
  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <div className={classes.content}>
      <Pagination
        page={currentPage}
        count={numPages}
        onChange={handleChangePage}
        size={isMobile ? "small" : "medium"}
      />
    </div>
  );
};

export default PaginationButtons;
