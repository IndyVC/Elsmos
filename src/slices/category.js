import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ELSMOS_API } from "../configurations/config";
//SLICE

const slice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    selectedCategory: null,
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export default slice.reducer;

//ACTIONS
export const { setCategories, setCategory } = slice.actions;

export const selectCategory = (category) => (dispatch) => {
  dispatch(setCategory(category));
};

export const fetchCategories = (companyId) => (dispatch) => {
  axios.get(`${ELSMOS_API}/${companyId}/Category`).then((res) => {
    dispatch(setCategories(res.data));
    dispatch(setCategory(res.data[0]));
  });
};
