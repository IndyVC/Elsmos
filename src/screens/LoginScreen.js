import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { validateEmail } from "../utils/utility";
//redux
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, signIn, checkSignedIn } from "../slices/user";
//stylings
import { inputStyling, buttonStyling, colors } from "../styles/styling";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [disabledLogin, setDisabledLogin] = useState(true);
  useEffect(() => {
    dispatch(checkSignedIn(navigation));
  }, []);

  useEffect(() => {
    if (user.email && user.password && validateEmail(user.email)) {
      setDisabledLogin(false);
    } else {
      setDisabledLogin(true);
    }
  }, [user.email, user.password]);

  return (
    <LinearGradient
      style={styles.container}
      colors={[colors.elmos_light, colors.elmos_dark]}
    >
      <View style={styles.box}>
        <View style={[inputStyling.container, { margin: 10 }]}>
          <TextInput
            placeholder="Email"
            style={inputStyling.input}
            onChangeText={(val) => dispatch(setEmail(val))}
            value={user.email}
            placeholderTextColor={colors.elmos_light}
            textContentType="emailAddress"
          />
          <FontAwesome5
            name="envelope"
            size={18}
            color={colors.elmos_dark}
            style={inputStyling.icon}
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
          <FontAwesome5
            name="lock"
            size={18}
            color={colors.elmos_dark}
            style={inputStyling.icon}
          />
        </View>
      </View>
      <TouchableOpacity
        style={[
          disabledLogin
            ? buttonStyling.disabledContainer
            : buttonStyling.container,
          { margin: 15 },
        ]}
        onPress={() =>
          dispatch(
            signIn({ email: user.email, password: user.password }, navigation)
          )
        }
        disabled={disabledLogin}
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
