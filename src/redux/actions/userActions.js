import { connectWallet, disconnectWallet } from "../../utils/wallet";
import { CLEAR_USER, SET_ADDRESS, SET_BALANCE } from "../actionTypes";

export const setUserAddress = (payload) => ({
  type: SET_ADDRESS,
  payload,
});
export const setUserBalance = (payload) => ({
  type: SET_BALANCE,
  payload,
});
export const clearUser = () => ({
  type: CLEAR_USER,
});

export const connectWalletAction = () => async (dispatch) => {
  try {
    const { address, balance } = await connectWallet();
    dispatch(setUserAddress(address));
    dispatch(setUserBalance(balance));
  } catch (error) {
    console.error("Error Connect");
  }
};

export const disconnectWalletAction = () => async (dispatch) => {
  try {
    disconnectWallet();
    dispatch(clearUser());
  } catch (error) {
    console.error("Error Disconnect");
  }
};
