import React, { useRef } from "react";
import { AppBar, Toolbar, Typography, TextField, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles";
import { Button } from "@mui/material";

import { fetchSearchData } from "../../api";

const Header = ({ setSearchValue, setProducts }) => {
  const searchText = useRef("");
  const classes = useStyles();
  const handleClick = async (e) => {
    e.preventDefault();
    const products = await fetchSearchData(searchText.current.value);
    setProducts(products);
    setSearchValue(searchText.current.value);
    console.log(products);
  };
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Search API Assessment
        </Typography>
        <Box component="form" display="flex">
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            {/* <InputBase
              placeholder="Search..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            /> */}
            <TextField
              id="search-text"
              label="Search..."
              variant="filled"
              inputRef={searchText}
            />
            <Button onClick={handleClick} className={classes.button}>
              Submit
            </Button>
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
