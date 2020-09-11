import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../slices/order";
//stylings
import { colors } from "../../styles/styling";
import { FontAwesome5 } from "@expo/vector-icons";

const Product = ({ item }) => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);

  return (
    <TouchableOpacity
      style={
        order.products.find((p) => p.id == item.id)
          ? styles.selectedContainer
          : styles.unselectedContainer
      }
      onPress={() => dispatch(addProduct(item))}
    >
      <View style={styles.text}>
        <Text
          style={
            order.products.find((p) => p.id == item.id)
              ? styles.selectedTitle
              : styles.unselectedTitle
          }
        >
          {item.title}
        </Text>
        <Text
          style={
            order.products.find((p) => p.id == item.id)
              ? styles.selectedPrice
              : styles.unselectedPrice
          }
        >
          € {item.price.toFixed(2)}
        </Text>
      </View>
      <FontAwesome5
        name="plus"
        style={styles.icon}
        color={
          order.products.find((p) => p.id == item.id)
            ? colors.white
            : colors.black2
        }
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  unselectedContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: colors.white,
    padding: 5,
    borderRadius: 5,
  },
  selectedContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: colors.green,
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
  selectedTitle: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
  unselectedTitle: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 18,
  },
  unselectedPrice: {
    color: colors.black2,
  },
  selectedPrice: {
    color: colors.white,
  },
  icon: {
    fontSize: 24,
    marginRight: 5,
  },
});

export default Product;
