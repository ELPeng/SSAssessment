import React, { useState } from "react";
import { AppBar, Toolbar, Typography, TextField, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles";
import { Button } from "@mui/material";

import { fetchPageData } from "../../api";

const Header = ({ setSearchValue, setProducts }) => {
  const [searchText, setSearchText] = useState("");
  const classes = useStyles();

  console.log(searchText);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const products = await fetchPageData(searchText, 1);
    setProducts(products);
    setSearchValue(searchText);
    console.log(products);
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Search API Assessment
        </Typography>
        <Box component="form" display="flex" onSubmit={handleSubmit}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <TextField
              id="search-text"
              label="Search..."
              variant="filled"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button type="submit" className={classes.button}>
              Submit
            </Button>
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
