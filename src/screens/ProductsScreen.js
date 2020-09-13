import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, FlatList, Text, View, Animated } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductCategories, selectCategory } from "../slices/category";
import { fetchProducts } from "../slices/product";

//components
import Category from "../components/products/Category";
import Product from "../components/products/Product";
import Basket from "../components/basket/Basket";
//stylings
import { colors } from "../styles/styling";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";

const Products = ({ navigation }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const company = useSelector((state) => state.company);
  const category = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchProductCategories(company.selectedCompany.id));
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
          data={category.productCategories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Category item={item} />}
          horizontal
          scrollEnabled
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          data={product.products}
          keyExtractor={(item) => {
            return item.title;
          }}
          renderItem={({ item }) => (
            <Product item={item} navigation={navigation} />
          )}
          scrollEnabled={true}
          style={styles.products}
        />
      </View>
      <Basket />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  products: {
    height: "80%",
    marginBottom: 10,
  },
});

export default Products;
