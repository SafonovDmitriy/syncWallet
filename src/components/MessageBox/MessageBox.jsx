import { Box } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { getUserBalance } from "../../redux/selectors";
import useStyles from "./styles";

const MessageNull = () => <span>press sync to connect.</span>;
const MessageEmntyBalance = () => <span>Does not have Token</span>;
const messages = {
  null: MessageNull,
  0: MessageEmntyBalance,
};

const MessageBox = () => {
  const classes = useStyles();
  const userBalance = useSelector(getUserBalance);
  return (
    <Box className={classes.messageBox}>
      {messages[userBalance] ? messages[userBalance]() : `Has Token`}
    </Box>
  );
};

export default MessageBox;
