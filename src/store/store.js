import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import user from "../slices/user";
import company from "../slices/company";
import product from "../slices/product";

const reducer = combineReducers({
    user,
    company,
    product
});

const store = configureStore({
    reducer
});

export default store;