import { StyleSheet } from 'react-native';

const colors = {
    gray: "#F4F5FF",
    darkGray: "#A4A4A4",
    purple: "rgb(75,67,116)",
    white: "#FFF"
}

export const buttonStyling = StyleSheet.create({
    container: {
        backgroundColor: colors.purple,
        borderRadius: 10,
        paddingVertical: 10,
        width: "50%",
    },
    text: {
        textAlign: "center",
        color: colors.white,
        fontSize: 18,
        fontWeight: "100",
        textTransform: "uppercase"
    }
});

export const inputStyling = StyleSheet.create({
    container: {
        width: "80%",
        backgroundColor: colors.gray,
        borderRadius: 15,
    },
    input: {
        color: colors.darkGray,
        padding: 15,
    }
})
