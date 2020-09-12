import React, { useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import DisplayProduct from "../components/products/DisplayProduct";
import Extra from "../components/products/Extra";
import { useSelector, useDispatch } from "react-redux";
import { fetchExtras } from "../slices/product";
//stylings
import { colors } from "../styles/styling";
import { LinearGradient } from "expo-linear-gradient";

const Extras = ({ route }) => {
  const dispatch = useDispatch();
  const product = route.params.product;
  const extra = useSelector((state) => state.product);
  const company = useSelector((state) => state.company);

  useEffect(() => {
    dispatch(fetchExtras(company.selectedCompany.id));
  }, []);

  return (
    <LinearGradient
      colors={[colors.elmos_dark_t, colors.elmos_light_t]}
      style={{
        height: "100%",
        position: "relative",
      }}
    >
      <DisplayProduct item={product} />
      <FlatList
        data={extra.extras}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Extra extra={item} product={product} />}
        style={styles.extras}
        showsVerticalScrollIndicator={false}
      />
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
