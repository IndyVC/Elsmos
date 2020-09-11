import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { distinct } from "../utils/utility";
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
    <LinearGradient colors={[colors.elmos_light, colors.elmos_dark]}>
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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  categories: {
    marginBottom: 15,
  },
  products: {
    height: "100%",
  },
});

export default Order;
