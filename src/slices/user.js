import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-community/async-storage';

//SLICE 

const slice = createSlice({
    name: "user",
    initialState: {
        username: "",
        password: "",
        loggedIn: false
    },
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        loggedIn: (state, action) => {
            state.loggedIn = action.payload
        }
    }
});

export default slice.reducer;

//ACTIONS

export const { setUsername, setPassword, loggedIn } = slice.actions;

// ASYNC CALL 

export const signIn = (userState, navigation) => dispatch => {
    const { username, password } = userState;
    if (username == "Indy" && password == "Indy") {
        dispatch(loggedIn(true));
        AsyncStorage.setItem("username", username);
        AsyncStorage.setItem("password", password);
        AsyncStorage.setItem("token", "token")
        navigation.navigate("Company");
    }
    else {
        dispatch(loggedIn(false));
        AsyncStorage.setItem("token", "")
    }

}