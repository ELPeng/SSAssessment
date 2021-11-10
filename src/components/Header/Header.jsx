import React, { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";

import useStyles from "./styles";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Box,
  IconButton,
} from "@mui/material";

import { fetchPageData } from "../../api";

const Header = ({ setSearchValue, setProducts, setCurrentPage }) => {
  const [searchText, setSearchText] = useState("");
  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { results } = await fetchPageData(searchText, 1);
    setProducts(results);
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
            <IconButton onClick={handleSubmit}>
              <SearchIcon fontSize="large" className={classes.searchIcon} />
            </IconButton>
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
