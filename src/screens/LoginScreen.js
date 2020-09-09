import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
//redux
import { useDispatch, useSelector } from "react-redux";
import { setUsername, setPassword, signIn } from "../slices/user";
//stylings
import { inputStyling, buttonStyling, colors } from "../styles/styling";
import { LinearGradient } from "expo-linear-gradient";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    AsyncStorage.getItem("token", (err, res) =>
      res == "token" ? navigation.navigate("Company") : null
    );
  }, []);

  return (
    <LinearGradient
      style={styles.container}
      colors={[colors.elmos_light, colors.elmos_dark]}
    >
      <View style={styles.box}>
        <View style={[inputStyling.container, { margin: 10 }]}>
          <TextInput
            placeholder="Username"
            style={inputStyling.input}
            onChangeText={(val) => dispatch(setUsername(val))}
            value={user.username}
            placeholderTextColor={colors.elmos_light}
          />
        </View>
        <View style={[inputStyling.container, { margin: 10 }]}>
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={inputStyling.input}
            onChangeText={(val) => dispatch(setPassword(val))}
            value={user.password}
            placeholderTextColor={colors.elmos_light}
          />
        </View>
      </View>
      <TouchableOpacity
        style={[buttonStyling.container, { margin: 15 }]}
        onPress={() => dispatch(signIn(user, navigation))}
      >
        <Text style={buttonStyling.text}>Sign in</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  box: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  margin: {
    marginVertical: 10,
  },
});

export default Login;
