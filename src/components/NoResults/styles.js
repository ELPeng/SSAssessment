import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(6),
    color: theme.palette.primary.main,
    textAlign: "left",
    height: "65vh",
  },
  root: {
    flexGrow: 1,
  },
  list: {
    listStylePosition: "inside",
  },
}));
