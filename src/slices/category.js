import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//SLICE

const slice = createSlice({
  name: "category",
  initialState: {
    productCategories: [],
    extraCategories: [],
    selectedCategory: null,
  },
  reducers: {
    setProductCategories: (state, action) => {
      state.productCategories = action.payload;
    },
    setExtraCategories: (state, action) => {
      state.extraCategories = action.payload;
    },
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export default slice.reducer;

//ACTIONS
export const {
  setProductCategories,
  setExtraCategories,
  selectCategory,
} = slice.actions;

export const fetchProductCategories = (companyId) => (dispatch) => {
  axios.get(`/api/companies/${companyId}/categories/product`).then((res) => {
    dispatch(setProductCategories(res.data));
  });
};

export const fetchExtraCategories = (companyId) => (dispatch) => {
  axios.get(`/api/companies/${companyId}/categories/topping`).then((res) => {
    dispatch(setExtraCategories(res.data));
  });
};
