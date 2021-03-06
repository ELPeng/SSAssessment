import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import Product from "./Product/Product";
import PaginationButtons from "../PaginationButtons/PaginationButtons";

import useStyles from "./styles";
import NoResults from "./NoResults/NoResults";

const Products = ({
  products,
  searchValue,
  range,
  totalProducts,
  currentPage,
  setCurrentPage,
  numPages,
}) => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [products]);
  if (!products) return <NoResults value={searchValue} />;

  return (
    <main className={classes.content}>
      <Typography variant="h3" gutterBottom>
        Products
      </Typography>
      <Typography variant="h6">
        SHOWING {range.begin} - {range.end} OF {totalProducts} RESULTS FOR
        {searchValue.replace(/[^a-zA-Z ]/g, "")
          ? ` "${searchValue.toUpperCase()}"`
          : " ALL PRODUCTS"}
      </Typography>
      <PaginationButtons
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numPages={numPages}
      />
      {/* <div className={classes.toolbar} /> */}
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.uid} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
