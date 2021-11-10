import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  box: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "40%",
    },
    [theme.breakpoints.up("md")]: {
      width: "30%",
    },
  },

  searchIcon: {
    alignSelf: "center",
    marginRight: "10px",
    color: "white",
  },
  searchContainer: {
    display: "flex",
  },
  searchInput: {
    color: "white",
    width: "100%",
    height: "100%",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: theme.palette.primary.main,
  },
}));
