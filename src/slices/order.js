import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "order",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      if (!state.products.find((p) => p.id == action.payload.id))
        state.products.push(action.payload);
      else state.products.splice(state.products.indexOf(action.payload), 1);
    },
    pushProduct: (state, action) => {
      if (!state.products.find((p) => p.id == action.payload.id))
        state.products.push(action.payload);
    },
    addExtra: (state, action) => {
      const product = action.payload.product;
      const extra = action.payload.extra;
      const existingProduct = state.products.find((p) => p.id == product.id);
      let existingExtra;
      if (existingProduct.extras) {
        existingExtra = existingProduct.extras.find((e) => e.id === extra.id);
      }

      if (existingProduct && !existingExtra) {
        //product exists
        if (!existingProduct.extras) {
          existingProduct.extras = [];
        }
        existingProduct.extras.push(extra);
      } else if (existingProduct && existingExtra) {
        existingProduct.extras.splice(
          existingProduct.extras.indexOf(existingExtra),
          1
        );
      }
    },
  },
});

export default slice.reducer;

export const { addProduct, addExtra, pushProduct } = slice.actions;
