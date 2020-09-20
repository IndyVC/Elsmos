import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ELSMOS_API } from "../configurations/config";

//SLICE

const slice = createSlice({
  name: "product",
  initialState: {
    products: [],
    extras: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setExtras: (state, action) => {
      state.extras = action.payload;
    },
  },
});

export default slice.reducer;

//ACTIONS
export const { setProducts, setExtras } = slice.actions;

export const fetchProducts = (companyId, categoryId) => (dispatch) => {
  axios
    .get(`/api/companies/${companyId}/products/categories/${categoryId}`)
    .then((res) => {
      dispatch(setProducts(res.data));
    });
};

export const fetchExtras = (companyId, categoryId) => (dispatch) => {
  axios
    .get(`/api/companies/${companyId}/toppings/categories/${categoryId}`)
    .then((res) => {
      dispatch(setExtras(res.data));
    });
};
