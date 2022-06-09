import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import {productReducer, selectedProductReducer} from './productReducer';

export default combineReducers({
  auth,
  message,
  allProducts: productReducer,
  product: selectedProductReducer,
});
