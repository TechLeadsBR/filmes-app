import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

interface Props {
    onchange: (text: any) => void,
    placeHolder: string
}

export default function Input(props: Props){
    const { onchange, placeHolder } = props

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={text => onchange(text)} placeholder={placeHolder} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    input: {
        backgroundColor: "white",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#C4C4C4",
        height: 40,
        borderRadius: 5,
        paddingLeft: 8
    }
})