import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { distinct } from "../utils/utility";
import { useSelector } from 'react-redux';
//components
import Category from "../components/products/Category";
import Product from "../components/products/Product";
//stylings
import { inputStyling, colors } from "../styles/styling";
import { LinearGradient } from 'expo-linear-gradient';

const Order = () => {
    const product = useSelector(state => state.product);
    const [products, setProducts] = useState(product.products);
    const [categories, setCategories] = useState(products.map(p => p.category).filter(distinct));

    return <LinearGradient colors={[colors.elmos_light, colors.elmos_dark]}>
        <FlatList data={categories} keyExtractor={item => item} renderItem={({ item }) => <Category item={item} />} horizontal style={styles.categories} scrollEnabled showsHorizontalScrollIndicator={true} />
        <FlatList data={products} keyExtractor={item => { return item.title }} renderItem={({ item }) => <Product item={item} />} style={styles.products} scrollEnabled showsHorizontalScrollIndicator={false} />
    </LinearGradient>
}

const styles = StyleSheet.create({
    categories: {
        marginBottom: 15
    },
    products: {
        height: "100%"
    }
});

export default Order;
