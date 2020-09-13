import React, { useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchExtras } from "../slices/product";
import { fetchExtraCategories, selectCategory } from "../slices/category";
//components
import Category from "../components/products/Category";
import Basket from "../components/basket/Basket";
import DisplayProduct from "../components/products/DisplayProduct";
import Extra from "../components/products/Extra";
//stylings
import { colors } from "../styles/styling";
import { LinearGradient } from "expo-linear-gradient";

const Extras = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const product = route.params.product;
  const extra = useSelector((state) => state.product);
  const company = useSelector((state) => state.company);
  const category = useSelector((state) => state.category);

  useEffect(() => {
    const compId = company.selectedCompany.id;
    dispatch(fetchExtraCategories(compId));
  }, []);

  useEffect(() => {
    if (category.selectedCategory) {
      dispatch(
        fetchExtras(company.selectedCompany.id, category.selectedCategory.id)
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
      <FlatList
        data={category.extraCategories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Category item={item} />}
        horizontal
        scrollEnabled
        showsHorizontalScrollIndicator={true}
        style={{ maxHeight: "10%" }}
      />
      <DisplayProduct item={product} navigation={navigation} />
      <FlatList
        data={extra.extras}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Extra extra={item} product={product} />}
        style={styles.extras}
        showsVerticalScrollIndicator={false}
      />
      <Basket />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  extras: {
    marginLeft: "5%",
    width: "90%",
  },
});

export default Extras;
