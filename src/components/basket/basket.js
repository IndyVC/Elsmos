import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, Animated, FlatList } from "react-native";
import { colors } from "../../styles/styling";
import { useSelector } from "react-redux";
import GestureRecognizer from "react-native-swipe-gestures";
import Order from "./Order";

const Basket = () => {
  //---Animation---
  const basketAnimationState = useRef(new Animated.Value(0)).current;

  openBasket = () => {
    Animated.timing(basketAnimationState, {
      toValue: open ? -400 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  //--------------

  const order = useSelector((state) => state.order);
  const category = useSelector((state) => state.category);
  const [open, setOpen] = useState(false);

  const calculateTotal = () => {
    let total = 0;
    order.products?.forEach((p) => {
      total += Number(p.price);
      p?.extras?.forEach((e) => {
        total += Number(e.price);
      });
    });
    return total;
  };

  useEffect(() => {
    if (open) openBasket();
    else openBasket();
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [category.selectedCategory]);
  return (
    <Animated.View
      style={[
        styles.basket,
        {
          transform: [{ translateY: basketAnimationState }],
        },
      ]}
    >
      <GestureRecognizer
        onSwipeUp={() => setOpen(true)}
        onSwipeDown={() => setOpen(false)}
      >
        <Text style={styles.basketText}>
          Total:{" € "}
          {calculateTotal().toFixed(2)}
        </Text>
        <FlatList
          style={styles.orders}
          data={order.products}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return <Order order={item} />;
          }}
        />
      </GestureRecognizer>
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
    height: "80%",
  },
  basketText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  orders: {
    maxHeight: 380,
  },
});

export default Basket;
