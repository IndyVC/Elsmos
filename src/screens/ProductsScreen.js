import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, FlatList, Text, View, Animated } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../slices/category";
import { fetchProducts } from "../slices/product";
//components
import Category from "../components/products/Category";
import Product from "../components/products/Product";
import Basket from "../components/basket/basket";
//stylings
import { colors } from "../styles/styling";
import { LinearGradient } from "expo-linear-gradient";

const Products = ({ navigation }) => {
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
    <LinearGradient
      colors={[colors.elmos_dark_t, colors.elmos_light_t]}
      style={{
        height: "100%",
        position: "relative",
      }}
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
          renderItem={({ item }) => (
            <Product item={item} navigation={navigation} />
          )}
          style={styles.products}
          scrollEnabled
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Basket />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  products: {},
  categories: {},
});

export default Products;
