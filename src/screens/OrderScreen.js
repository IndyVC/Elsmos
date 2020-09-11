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
import { inputStyling, colors } from "../styles/styling";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
//animation

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
    <LinearGradient
      colors={[colors.disabledGray, colors.white]}
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
          renderItem={({ item }) => <Product item={item} />}
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

export default Order;
