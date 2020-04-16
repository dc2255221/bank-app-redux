// create Redux store
import {createStore} from "redux";
import reducer from '../reducers/index.js';
const initialState = {
    username: "Janny",
    totalAmount: 2500701
  };
export const store = createStore(reducer, initialState);