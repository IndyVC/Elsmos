import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from "../styles/styling";
import { fetchMyOrders, deleteOrders } from "../slices/order";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";

const MyOrders = () => {
    const order = useSelector(state => state.order);
    const company = useSelector(state => state.company);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMyOrders());
    }, []);

    return <LinearGradient
        colors={[colors.elmos_dark_t, colors.elmos_light_t]}
        style={{
            position: "relative",
            flex: 1
        }}
    >
        <Text style={[styles.msg, { display: order.myOrders.length > 0 ? "none" : null }]} >Geen orders beschikbaar.</Text>
        <FlatList data={order.myOrders} renderItem={({ item }) => {
            return <View style={styles.order}>
                <Text style={styles.time}>{new Date(item.order.orderDate).toISOString()}</Text>
                <Text style={styles.total}>€ {item.total}</Text>
                <TouchableOpacity onPress={() => dispatch(deleteOrders(item.order.id))} style={styles.delete}>
                    <View>
                        <FontAwesome5 name="times-circle" size={16} />
                    </View>
                </TouchableOpacity>
                <View style={styles.payed}>
                    <Text>Betaald:</Text>
                    <FontAwesome5 name={item.order.isPayed ? "check" : "times"} style={styles.icon} />
                </View>
            </View>
        }} keyExtractor={(item) => item.order.id} />
    </LinearGradient>
}

const styles = StyleSheet.create({
    msg: {
        color: colors.white,
        textAlign: "center"
    },
    order: {
        backgroundColor: colors.white,
        margin: 5,
        padding: 5,
        borderRadius: 2.5,
        position: "relative"
    },
    time: {
        color: colors.elmos_light,
        fontWeight: "bold",
    },
    total: {
        fontSize: 16,
        color: colors.elmos_dark
    },
    icon: {
        paddingHorizontal: 10,
        marginTop: 2.5
    },
    payed: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    delete: {
        position: "absolute",
        right: 10,
        top: 10,
    }
});

export default MyOrders;