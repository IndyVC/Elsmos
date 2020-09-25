import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { ELSMOS_API } from "../configurations/config";
//SLICE

const slice = createSlice({
  name: "user",
  initialState: {
    email: "",
    password: "",
    token: "",
    loggedIn: false,
  },
  reducers: {
    setEmail: (state, action) => {
      AsyncStorage.setItem("email", action.payload);
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      AsyncStorage.setItem("password", action.payload);
      state.password = action.payload;
    },
    setToken: (state, action) => {
      AsyncStorage.setItem("token", action.payload);
      state.token = action.payload;
    },
    loggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export default slice.reducer;

//ACTIONS
export const { setToken, setEmail, setPassword, loggedIn } = slice.actions;

export const signIn = (login, navigation) => (dispatch) => {
  axios
    .post(`/token/login`, {
      email: login.email,
      password: login.password,
    })
    .then((res) => {
      dispatch(setToken(res.data.token));
      dispatch(setEmail(login.email));
      dispatch(setPassword(login.password));
      navigation.navigate("Company");
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

export const checkSignedIn = (navigation) => (dispatch) => {
  AsyncStorage.multiGet(["email", "password"], (err, res) => {
    const email = res[0][res[0].length - 1];
    const password = res[1][res[1].length - 1];
    if (email && password) {
      dispatch(setEmail(email));
      dispatch(setPassword(password));
    }
  });
};
