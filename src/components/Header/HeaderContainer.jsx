import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  connectWalletAction,
  disconnectWalletAction,
} from "../../redux/actions/userActions";
import { getUserAddress, getUserBalance } from "../../redux/selectors";
import Header from "./Header";

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const userAddress = useSelector(getUserAddress);
  const userBalance = useSelector(getUserBalance);

  const handleConnectWallet = async () => {
    dispatch(connectWalletAction());
  };
  const handleDisconnectWallet = () => {
    dispatch(disconnectWalletAction());
  };

  const checkIsSyncAccount = () => {
    if (userAddress) {
      handleDisconnectWallet();
    } else {
      handleConnectWallet();
    }
  };
  return (
    <Header
      address={userAddress}
      checkIsSyncAccount={checkIsSyncAccount}
      userBalance={userBalance}
    />
  );
};
export default HeaderContainer;
