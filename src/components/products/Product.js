import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../styles/styling';

const Product = ({ item }) => {
    return <View style={styles.container}><Text style={styles.text}>{item.title}</Text></View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        margin: 5,
        borderRadius: 15
    },
    text: {
        padding: 10
    }
});

export default Product;