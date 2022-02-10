import { Box } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTERS } from "../Routers/paths";
import useStyles from "./styles.js";

const NavMenu = () => {
  const classes = useStyles();
  return (
    <Box className={classes.navLinksWrapper}>
      {ROUTERS.map(({ title, path }) => (
        <NavLink
          key={path}
          className={classes.navLink}
          to={path}
          activeClassName={classes.navLink_active}
        >
          {title}
        </NavLink>
      ))}
    </Box>
  );
};

export default NavMenu;
