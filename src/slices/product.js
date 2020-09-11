import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ELSMOS_API } from "../configurations/config";

//SLICE

const slice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export default slice.reducer;

//ACTIONS
export const { setProducts } = slice.actions;

export const fetchProducts = (companyId, categoryId) => (dispatch) => {
  axios.get(`${ELSMOS_API}/${companyId}/${categoryId}/Product`).then((res) => {
    dispatch(setProducts(res.data));
  });
};
