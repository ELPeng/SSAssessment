import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

import useStyles from "./styles";
const Product = ({ product }) => {
  const classes = useStyles();

  const onSale = product.price !== product.msrp;

  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          className={classes.media}
          image={product.thumbnailImageUrl}
          alt={product.title[0]}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h6" gutterBottom>
              {product.brand}
            </Typography>
            <Typography variant="subtitle1" fontSize={14} gutterBottom>
              {product.name}
            </Typography>
            <div className={classes.priceContainer}>
              {product.msrp ? (
                <Typography
                  variant="subtitle1"
                  className={onSale ? classes.msrpSale : ""}
                >
                  {`$${product.msrp}`}
                </Typography>
              ) : (
                <Typography variant="subtitle1">Sold Out</Typography>
              )}
              {onSale ? (
                <Typography
                  variant="subtitle1"
                  className={classes.salePrice}
                  fontWeight="bold"
                >{`$${product.price}`}</Typography>
              ) : (
                ""
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Product;
