import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import user from "../slices/user";
import company from "../slices/company";
import product from "../slices/product";
import category from "../slices/category";
import order from "../slices/order";

const reducer = combineReducers({
  user,
  company,
  product,
  category,
  order,
});

const store = configureStore({
  reducer,
});

export default store;
