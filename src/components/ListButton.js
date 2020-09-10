import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from "../styles/styling";

const ListButton = ({ func, item }) => {
    return <TouchableOpacity onPress={() => func()}>
        <Text style={styles.company}>{item}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    company: {
        textAlign: "left",
        paddingLeft: 15,
        paddingVertical: 10,
        color: colors.darkGray
    }
})

export default ListButton;
