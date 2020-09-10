import React, { useEffect } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { capitalize } from "../../utils/utility";
import { colors } from '../../styles/styling';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from "../../slices/product";

const Category = ({ item }) => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product);

    return <TouchableOpacity onPress={() => dispatch(selectCategory(item))}>
        <Text style={[styles.text, { backgroundColor: product.selectedCategory == item ? colors.elmos_dark : colors.white, color: product.selectedCategory == item ? colors.white : colors.black }]}>{capitalize(item)}</Text>
    </TouchableOpacity >
}

const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
        textAlign: "center",
        padding: 10,
        borderRadius: 15,
        margin: 10
    }
});

export default Category;