import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ELSMOS_API } from "../configurations/config";
//SLICE

const slice = createSlice({
  name: "company",
  initialState: {
    companies: [],
    selectedCompany: null,
  },
  reducers: {
    setCompanies: (state, action) => {
      state.companies = action.payload;
    },
    setCompany: (state, action) => {
      state.selectedCompany = action.payload;
    },
  },
});

export default slice.reducer;

//ACTIONS
export const { setCompanies, setCompany } = slice.actions;

export const selectCompany = (company, navigation) => (dispatch) => {
  dispatch(setCompany(company));
  navigation.navigate("Products");
};

export const fetchCompanies = () => (dispatch) => {
  axios.get(`/Company`).then((res) => {
    dispatch(setCompanies(res.data));
  });
};
