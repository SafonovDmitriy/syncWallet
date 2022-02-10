import { CLEAR_USER, SET_ADDRESS, SET_BALANCE } from "../actionTypes";

const initialStore = {
  address: null,
  balance: null,
};

const userReduce = (state = initialStore, action) => {
  switch (action.type) {
    case SET_ADDRESS:
      return { ...state, address: action.payload };
    case SET_BALANCE:
      return { ...state, balance: action.payload };
    case CLEAR_USER:
      return initialStore;
    default:
      return { ...state };
  }
};

export default userReduce;
