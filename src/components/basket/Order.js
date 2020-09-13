import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../../styles/styling";

const Order = ({ order }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.productText}>{order.title}</Text>
        <Text style={[styles.productText, { paddingRight: 20 }]}>
          € {order.price}
        </Text>
      </View>
      <FlatList
        data={order.extras}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View style={[styles.container]}>
              <Text style={styles.order}>{item.title}</Text>
              <Text style={[styles.order, { paddingRight: 20 }]}>
                € {item.price}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productText: {
    color: colors.white,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  order: {
    color: colors.white,
    paddingLeft: 30,
  },
});

export default Order;
