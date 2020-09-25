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
    .get(`/companies/${companyId}/products/categories/${categoryId}`)
    .then((res) => {
      dispatch(setProducts(res.data));
    }).catch(err => {
      const status = err.response.status;
      switch (status) {
        case 500:
          alert("Account does not exist");
          break;
        default:
          alert("Check your network connection");
          break;
      }
    })
};

export const fetchExtras = (companyId, categoryId) => (dispatch) => {
  axios
    .get(`/companies/${companyId}/toppings/categories/${categoryId}`)
    .then((res) => {
      dispatch(setExtras(res.data));
    }).catch(err => {
      const status = err.response.status;
      switch (status) {
        default:
          alert("Check your network connection");
          break;
      }
    })
};
