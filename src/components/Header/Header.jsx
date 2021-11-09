import React from "react";
import { AppBar, Toolbar, Typography, TextField, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles";
import { Button } from "@mui/material";

import { fetchSearchData } from "../../api";

const Header = ({ searchValue, setSearchValue, setProducts }) => {
  const classes = useStyles();
  const handleSubmit = async () => {
    const products = await fetchSearchData(searchValue);
    setProducts(products);
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
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <Button onClick={handleSubmit}>Submit</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
