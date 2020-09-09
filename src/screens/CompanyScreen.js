import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
//stylings
import { inputStyling, colors } from "../styles/styling";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
const Company = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[colors.elmos_light, colors.elmos_dark]}
    >
      <View style={inputStyling.container}>
        <TextInput
          placeholder="Enter company name..."
          style={inputStyling.input}
          placeholderTextColor={colors.elmos_light}
        />
        <FontAwesome5 name="search" size={24} color={colors.elmos_dark} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#FFF",
  },
});

export default Company;
