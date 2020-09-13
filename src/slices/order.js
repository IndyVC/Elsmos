import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const slice = createSlice({
  name: "order",
  initialState: {
    products: [],
    currentProduct: null,
  },
  reducers: {
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
} = slice.actions;

export const confirmOrder = (products, companyId) => (dispatch) => {
  const orders = products.map((p) => {
    return { productId: p.id, extraIds: p.extras?.map((e) => e.id) };
  });
  axios.post(`/${companyId}/Order`, orders).then((res) => console.log(res));
};
