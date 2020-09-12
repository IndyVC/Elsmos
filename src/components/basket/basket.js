import React, { useEffect, useState, useRef } from "react";
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
  const basketAnimationState = useRef(new Animated.Value(0)).current;

  openBasket = () => {
    Animated.timing(basketAnimationState, {
      toValue: open ? -100 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  //--------------

  const order = useSelector((state) => state.order);
  const [open, setToggle] = useState(false);

  useEffect(() => {
    if (open) openBasket();
    else openBasket();
  }, [open]);
  return (
    <Animated.View
      style={[
        styles.basket,
        {
          transform: [{ translateY: basketAnimationState }],
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          setToggle(!open);
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
    backgroundColor: "black",
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
