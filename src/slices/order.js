import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setProducts } from "./product";

const slice = createSlice({
  name: "order",
  initialState: {
    products: [],
    currentProduct: null,
    myOrders: []
  },
  reducers: {
    setMyOrders(state, action) {
      state.myOrders = action.payload;
    },
    clearProducts(state, action) {
      state.products = [];
    },
    addProduct: (state, action) => {
      if (!state.products.find((p) => p.id == action.payload.id))
        state.products.push(action.payload);
    },
    addExtra: (state, action) => {
      const product = state.currentProduct;
      const extra = action.payload.extra;
      let existingExtra;
      if (product.extras) {
        existingExtra = product?.extras?.find((e) => e.id === extra.id);
      }

      if (product && !existingExtra) {
        //product exists
        if (!product.extras) {
          product.extras = [];
        }
        product.extras.push(extra);
      } else if (product && extra) {
        product.extras.splice(product.extras.indexOf(existingExtra), 1);
      }
    },
    selectProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    confirmProduct: (state) => {
      state.products.push(state.currentProduct);
      state.currentProduct = null;
    },
  },
});

export default slice.reducer;

export const {
  addProduct,
  addExtra,
  selectProduct,
  confirmProduct,
  clearProducts,
  setMyOrders
} = slice.actions;

export const fetchMyOrders = () => dispatch => {
  axios.get(`/companies/Orders/User`).then(res => {
    dispatch(setMyOrders(res.data));
  }).catch(err => {
    switch (status) {
      default:
        alert("Check your network connection");
        break;
    }
  })
}

export const deleteOrders = (id) => dispatch => {
  console.log(id);
  axios.delete(`/companies/Orders/${id}`).then(() => {
    dispatch(fetchMyOrders());
  })
}

export const confirmOrder = (products, companyId) => (dispatch) => {
  const orders = {
    companyId: companyId,
    lines: products.map((p) => {
      return { productId: p.id, toppings: p.extras?.map((e) => e.id) };
    }),
  };
  axios.post(`/companies/Orders`, orders).then(res => {
    dispatch(clearProducts());
  }).catch(err => {
    switch (status) {
      default:
        alert("Check your network connection");
        break;
    }
  })
};
