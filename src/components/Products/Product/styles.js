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
  },
  priceContainer: {
    display: "flex",
    flexDirection: "row",
    fontSize: "1em",
  },
  salePrice: {
    color: "#3a23ad",
    fontWeight: 900,
    marginLeft: 20,
  },
}));
