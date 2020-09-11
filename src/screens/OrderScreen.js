import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../slices/category";
import { fetchProducts } from "../slices/product";
//components
import Category from "../components/products/Category";
import Product from "../components/products/Product";
//stylings
import { inputStyling, colors } from "../styles/styling";
import { LinearGradient } from "expo-linear-gradient";

const Order = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const company = useSelector((state) => state.company);
  const category = useSelector((state) => state.category);
  const order = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchCategories(company.selectedCompany.id));
  }, []);

  useEffect(() => {
    if (category.selectedCategory) {
      dispatch(
        fetchProducts(company.selectedCompany.id, category.selectedCategory.id)
      );
    }
  }, [category.selectedCategory]);

  return (
    <LinearGradient
      colors={[colors.disabledGray, colors.white]}
      style={{ height: "100%", position: "relative" }}
    >
      <View>
        <FlatList
          data={category.categories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Category item={item} />}
          horizontal
          style={styles.categories}
          scrollEnabled
          showsHorizontalScrollIndicator={true}
        />
        <FlatList
          data={product.products}
          keyExtractor={(item) => {
            return item.title;
          }}
          renderItem={({ item }) => <Product item={item} />}
          style={styles.products}
          scrollEnabled
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.basket}>
        <Text style={styles.basketText}>
          Total:{" € "}
          {order.products
            .map((p) => p.price)
            .reduce((p, c) => p + c, 0)
            .toFixed(2)}
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  basket: {
    position: "absolute",
    width: "96%",
    backgroundColor: colors.black2,
    paddingVertical: 15,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    bottom: 0,
    marginHorizontal: "2%",
  },
  basketText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Order;
