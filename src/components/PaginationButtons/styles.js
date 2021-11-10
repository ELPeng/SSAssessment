import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    display: "flex",
    justifyContent: "center",
    paddingTop: 30,
    paddingBottom: 30,
  },
  root: {
    flexGrow: 1,
  },
}));
