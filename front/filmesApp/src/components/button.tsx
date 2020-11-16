import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
    text: string,
    onpress?: (event: any) => void
}

export default function Button(props: Props){
    const { text, onpress } = props

    return (
        <TouchableOpacity style={styles.container} onPress={(event: any) => {
            if(onpress) onpress(event)
        }}><Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#2A2E32",
        height: 40,
        display: "flex",
        justifyContent: "center",
        borderRadius: 5
    },
    text: {
        color: "white",
        textAlign: "center"
    }
})