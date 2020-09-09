import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import user from "../slices/user";

const reducer = combineReducers({
    user
});

const store = configureStore({
    reducer
});

export default store;