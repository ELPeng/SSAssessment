import { Paper, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";
const NoResults = ({ value }) => {
  const classes = useStyles();
  if (!value) return null;
  console.log(value);
  return (
    <div className={classes.content}>
      <div className={classes.toolbar} />
      <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
        NO RESULTS FOR "{value.toUpperCase()}" FOUND.
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Suggestions
      </Typography>
      <ul className={classes.list}>
        <li>Check for misspellings.</li>
        <li>Remove possible redundant keywords (ie. "products").</li>
        <li>Use other words to describe what you are searching for.</li>
      </ul>
    </div>
  );
};

export default NoResults;
