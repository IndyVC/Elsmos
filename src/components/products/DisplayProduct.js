import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { colors } from "../../styles/styling";

const DisplayProduct = ({ item }) => {
  const order = useSelector((state) => state.order);
  const calculateTotalProduct = () => {
    const product = order.products.find((p) => p.id === item.id);
    let summary = Number(product.price.toFixed(2));
    product?.extras?.forEach((e) => {
      summary += Number(e.price.toFixed(2));
    });
    return summary;
  };

  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>€ {item.price.toFixed(2)}</Text>
      </View>
      <Text style={styles.summary}>€ {calculateTotalProduct().toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginLeft: "5%",
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  summary: {
    fontSize: 18,
    color: colors.black2,
    fontWeight: "bold",
  },
  title: {
    color: colors.black2,
    fontWeight: "bold",
    fontSize: 18,
  },
  price: {
    color: colors.black2,
    fontSize: 16,
  },
});

export default DisplayProduct;
