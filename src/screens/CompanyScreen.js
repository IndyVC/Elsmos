import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { } from "../styles/styling";
import { TextInput } from 'react-native-gesture-handler';

const Company = () => {
    return <View style={styles.container}><TextInput placeholder="Enter company name..." /></View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        height: "100%"
    }
});

export default Company;