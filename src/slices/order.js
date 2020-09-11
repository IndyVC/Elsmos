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
  },
});

export default slice.reducer;

export const { addProduct } = slice.actions;
