import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Summary = () => {
    return (
        <View>
            <Text style={styles.summary}>Nothing but sunshine.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    summary: {
        fontSize: 20,
        fontFamily: "HelveticaLight",
        marginTop:32,
        marginBottom:32,
        textAlign:"center",
    }
})

export default Summary