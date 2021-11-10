import React from "react";
import { Grid, Typography } from "@mui/material";

import Product from "./Product/Product";

import useStyles from "./styles";
import NoResults from "../NoResults/NoResults";

const Products = ({ products, searchValue, setCurrentPage }) => {
  const classes = useStyles();

  console.log(products);
  if (!products) return <NoResults value={searchValue} />;
  //   `NO RESULTS FOR "${searchValue.toUpperCase()}" FOUND."`;
  return (
    <main className={classes.content}>
      <Typography variant="h3">Products</Typography>
      <Typography variant="body1">Products</Typography>

      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product, i) => {
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
