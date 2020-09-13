import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectProduct } from "../../slices/order";
import GestureRecognizer from "react-native-swipe-gestures";

//stylings
import { colors } from "../../styles/styling";
import { FontAwesome5 } from "@expo/vector-icons";
import { capitalize } from "../../utils/utility";

const Product = ({ item, navigation }) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(selectProduct(item));
        navigation.navigate("Extras", { product: item });
      }}
    >
      <View style={styles.container}>
        <View style={styles.text} style={styles.text}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>€ {item.price.toFixed(2)}</Text>
        </View>
        <FontAwesome5 name="arrow-right" style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: colors.white,
    padding: 5,
    borderRadius: 5,
  },
  text: {
    marginBottom: 2,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 18,
  },
  price: {
    color: colors.black2,
  },
  icon: {
    fontSize: 24,
    margin: 10,
    color: colors.black2,
  },
});

export default Product;
