import { createSlice } from "@reduxjs/toolkit";

//SLICE 

const slice = createSlice({
    name: "product",
    initialState: {
        products: [{ title: "Broodje kaas", category: "koude broodjes" }, { title: "Broodje hesp", category: "koude broodjes" },
        { title: "Broodje kaas/hesp", category: "koude broodjes" }, { title: "Martino", category: "koude broodjes" },
        { title: "Broodje prepare", category: "koude broodjes" }, { title: "Broodje vleessla", category: "koude broodjes" },
        { title: "Hot dog", category: "warme broodjes" }, { title: "Worsten broodje", category: "warme broodjes" },
        { title: "Hamburger", category: "warme broodjes" }, { title: "Cola", category: "frisdrank" },
        { title: "Fanta", category: "frisdrank" }, { title: "Cola Zero", category: "frisdrank" },
        { title: "Ice-tea", category: "frisdrank" }],
        selectedCategory: ""
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        selectCategory: (state, action) => {
            state.selectedCategory = action.payload
        }
    }
});

export default slice.reducer;

//ACTIONS

export const { setProducts, selectCategory } = slice.actions;

// ASYNC CALLS 
