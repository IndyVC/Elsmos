import React, { useEffect } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { capitalize } from "../../utils/utility";
import { colors } from "../../styles/styling";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../slices/category";

const Category = ({ item }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);

  return (
    <TouchableOpacity onPress={() => dispatch(selectCategory(item))}>
      <Text
        style={[
          styles.text,
          {
            backgroundColor:
              category.selectedCategory === item ? colors.black2 : colors.white,
            color:
              category.selectedCategory === item ? colors.white : colors.black,
          },
        ]}
      >
        {capitalize(item.title)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    borderRadius: 15,
    margin: 10,
  },
});

export default Category;
