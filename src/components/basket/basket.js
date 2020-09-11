import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../styles/styling";
import { useSelector } from "react-redux";

const Basket = () => {
  //---Animation---
  const slide = new Animated.Value(0);

  animateBasket = () => {
    Animated.timing(slide, {
      toValue: -100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  //--------------

  const order = useSelector((state) => state.order);

  return (
    <Animated.View
      style={[styles.basket, { transform: [{ translateY: slide }] }]}
    >
      <TouchableOpacity
        onPress={() => {
          animateBasket();
        }}
      >
        <Text style={styles.basketText}>
          Total:{" € "}
          {order.products
            .map((p) => p.price)
            .reduce((p, c) => p + c, 0)
            .toFixed(2)}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  basket: {
    width: "96%",
    backgroundColor: colors.black2,
    paddingVertical: 15,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    marginHorizontal: "2%",
    top: "90%",
    position: "absolute",
    height: "30%",
  },
  basketText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Basket;
