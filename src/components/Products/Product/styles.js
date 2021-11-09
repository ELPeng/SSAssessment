import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0 0 8px rgba(33,33,33,.4)",
    },
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  priceContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  salePrice: {
    color: "#3a23ad",
    fontWeight: 900,
  },
  msrpSale: {
    color: "#a6a6a6",
    textDecoration: "line-through",
    paddingRight: 10,
  },
}));
