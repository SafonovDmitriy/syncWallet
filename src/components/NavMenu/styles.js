import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  navLinksWrapper: {
    display: "flex",
    gap: 16,
    fontSize: 24,
    "& a": {
      textDecoration: "none",
    },
  },
  navLink: {
    color: "grey",
    transition: "all 0.5s",
    "&:hover": {
      color: "white",
    },
  },
  navLink_active: {
    color: "white",
  },
});
