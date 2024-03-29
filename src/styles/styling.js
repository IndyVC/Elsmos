import { StyleSheet } from "react-native";

export const colors = {
  gray: "#F4F5FF",
  darkGray: "#A4A4A4",
  elmos_light: "rgba(170, 20, 129,1)",
  elmos_dark: "rgba(83, 37, 128,1)",
  elmos_light_t: "rgba(170, 20, 129,0.7)",
  elmos_dark_t: "rgba(83, 37, 128,0.7)",
  elmos_gray: "#F0F0F0",
  white: "#FFF",
  black: "#4A4A4A",
  disabledGray: "rgba(164, 164, 164,0.5)",
  black2: "#272727",
  green: "rgb(33,193,116)",
};

export const buttonStyling = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 10,
    width: "50%",
  },
  text: {
    textAlign: "center",
    color: colors.elmos_dark,
    fontSize: 18,
    fontWeight: "100",
    textTransform: "uppercase",
  },
  disabledContainer: {
    backgroundColor: colors.disabledGray,
    borderRadius: 10,
    paddingVertical: 10,
    width: "50%",
  },
});

export const inputStyling = StyleSheet.create({
  container: {
    width: "80%",
    backgroundColor: colors.white,
    borderRadius: 15,
    flexDirection: "row",
    position: "relative",
  },
  input: {
    color: colors.elmos_light,
    padding: 15,
    textAlign: "left",
    width: "100%",
    height: "100%",
  },
  icon: {
    position: "absolute",
    right: 15,
    top: 15,
  },
});
