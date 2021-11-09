import React from "react";
import { Grid } from "@mui/material";

import Product from "./Product/Product";

import useStyles from "./styles";

const Products = ({ products }) => {
  const classes = useStyles();
  console.log(products);
  if (!products) return null;
  return (
    <main className={classes.content}>
      <h1>Products</h1>
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
