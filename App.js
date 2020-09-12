import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//custom
import Login from "./src/screens/LoginScreen";
import Company from "./src/screens/CompanyScreen";
import Products from "./src/screens/ProductsScreen";
import Extras from "./src/screens/ExtrasScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: true }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Company" component={Company} />
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="Extras" component={Extras} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
