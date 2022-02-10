import { Box, Button } from "@material-ui/core";
import { isNull } from "lodash";
import React from "react";
import { NavMenu } from "../NavMenu";
import useStyles from "./styles";
const Header = ({ address, userBalance, checkIsSyncAccount }) => {
  const classes = useStyles();
  return (
    <header className={classes.headerWrapper}>
      <Box>
        <NavMenu />
      </Box>
      {!isNull(userBalance) && (
        <Box className={classes.balanceBox}>Your balance is {userBalance}</Box>
      )}
      <Button variant="contained" onClick={checkIsSyncAccount}>
        {address ? "Unsync" : "Sync"}
      </Button>
    </header>
  );
};
export default Header;
