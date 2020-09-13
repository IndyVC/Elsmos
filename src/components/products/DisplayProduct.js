import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { confirmProduct } from "../../slices/order";
//styling
import { colors } from "../../styles/styling";

const DisplayProduct = ({ item, navigation }) => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);

  const calculateTotalProduct = () => {
    const product = order.currentProduct;
    let summary = Number(product?.price.toFixed(2));
    product?.extras?.forEach((e) => {
      summary += Number(e?.price.toFixed(2));
    });
    return summary;
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.product}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>€ {item.price.toFixed(2)}</Text>
        </View>
        <Text style={styles.summary}>
          € {calculateTotalProduct().toFixed(2)}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.confirm}
        onPress={() => {
          navigation.navigate("Products");
          dispatch(confirmProduct());
        }}
      >
        <Text style={styles.confirmTxt}>Confirm order</Text>
      </TouchableOpacity>
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
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginTop: 10,
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
  confirm: {
    width: "90%",
    marginLeft: "5%",
    padding: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderTopWidth: 1,
  },
  confirmTxt: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default DisplayProduct;
