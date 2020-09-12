import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../../styles/styling";

const Option = ({ func, item }) => {
  return (
    <TouchableOpacity onPress={() => func()}>
      <Text style={styles.company}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  company: {
    textAlign: "left",
    paddingLeft: 15,
    paddingVertical: 10,
    color: colors.darkGray,
  },
});

export default Option;
