import React, { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";

import useStyles from "./styles";
import { AppBar, Toolbar, Typography, TextField, Box } from "@mui/material";

import { fetchPageData } from "../../api";

const Header = ({ setSearchValue, setProducts, setCurrentPage }) => {
  const [searchText, setSearchText] = useState("");
  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const products = await fetchPageData(searchText, 1);
    setProducts(products);
    setSearchValue(searchText);
    setSearchText("");
    setCurrentPage(1);
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          SearchSpring
        </Typography>
        <Box className={classes.box} component="form" onSubmit={handleSubmit}>
          <div className={classes.searchContainer}>
            <SearchIcon fontSize="large" className={classes.searchIcon} />
            <TextField
              className={classes.searchInput}
              label="Search for Brand, Color, Size..."
              variant="filled"
              size="small"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </Box>
        {/* <Box className={classes.box} component="form" onSubmit={handleSubmit}>
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

            <IconButton
              type="submit"
              color="primary"
              aria-label="search button"
            >
              <SearchIcon />
            </IconButton>
          </div>
        </Box> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
