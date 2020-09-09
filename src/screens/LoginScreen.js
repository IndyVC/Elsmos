import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Button } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
//redux
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setPassword, signIn } from '../slices/user';
//stylings
import { inputStyling, buttonStyling } from "../styles/styling";

const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => {
        AsyncStorage.getItem("token", (err, res) => res == "token" ? navigation.navigate("Company") : null);
    }, [])

    return <View style={styles.container}>
        <View style={styles.box}>
            <View style={[inputStyling.container, { margin: 10 }]}>
                <TextInput placeholder="Username" style={inputStyling.input} onChangeText={(val) => dispatch(setUsername(val))} value={user.username} placeholderTextColor="#A4A4A4" />
            </View>
            <View style={[inputStyling.container, { margin: 10 }]}>
                <TextInput placeholder="Password" secureTextEntry style={inputStyling.input} onChangeText={val => dispatch(setPassword(val))} value={user.password} placeholderTextColor="#A4A4A4" />
            </View>
        </View>
        <TouchableOpacity style={[buttonStyling.container, { margin: 15 }]} onPress={() => dispatch(signIn(user, navigation))}>
            <Text style={buttonStyling.text}>Sign in</Text>
        </TouchableOpacity>
    </View >
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        backgroundColor: "#FFFFFF"
    },
    box: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%"
    },
    margin: {
        marginVertical: 10
    }
});

export default Login;