import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-community/async-storage';

//SLICE 

const slice = createSlice({
    name: "company",
    initialState: {
        companies: ["Meals on Wheels"],
        currentCompany: ""
    },
    reducers: {
        setCompanies: (state, action) => {
            state.companies = action.payload;
        },
        selectCompany: (state, action) => {
            state.currentCompany = action.payload
        }
    }
});

export default slice.reducer;

//ACTIONS

export const { setCompanies, selectCompany } = slice.actions;

// ASYNC CALLS 
export const fetchCompany = (company, navigation) => dispatch => {
    dispatch(selectCompany(company));
    navigation.navigate("Order")
}