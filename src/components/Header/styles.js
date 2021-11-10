import { alpha, makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  box: {
    width: "50%",
  },
  //   search: {
  //     position: "relative",
  //     borderRadius: theme.shape.borderRadius,
  //     backgroundColor: theme.palette.common.white,
  //     "&:hover": { backgroundColor: theme.palette.common.white },
  //     marginRight: theme.spacing(2),
  //     marginLeft: 0,
  //     width: "100%",
  //   },
  searchIcon: {
    alignSelf: "center",
    marginRight: "10px",
    color: "white",
  },
  searchContainer: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    // backgroundColor: alpha(theme.palette.common.white, 0.15),
    // paddingLeft: "20px",
    // paddingRight: "20px",
    // marginTop: "5px",
    // marginBottom: "5px",
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
