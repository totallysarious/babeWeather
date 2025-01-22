import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

import { icons } from "../constants";

const TempBanner = () => {
    return (
        <ImageBackground source={icons.sunny} style={styles.image}>

            <View style={styles.tempRow}>
                <Text style={styles.extreme}>69°</Text>
                <Text style={styles.current}>69°</Text>
                <Text style={styles.extreme}>69°</Text>
            </View>

            <Text style={styles.feelsLike}>(69°)</Text>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    tempRow: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:16,
    },

    image: {
        width: "100%",
        height: 150,
        justifyContent:"center",
    },

    extreme: {
        fontSize: 32,
        fontFamily: "GimletDisplayBlack",
        paddingLeft: 16,
        paddingRight: 16,
        color: "#1B1C2A",
    },

    current: {
        fontSize: 60,
        fontFamily: "GimletDisplayBlack",
        paddingLeft: 32,
        paddingRight: 32,
        color: "#1B1C2A",
    },

    feelsLike: {
        fontSize: 30,
        fontFamily: "GimletDisplayBlack",
        color: "#1B1C2A",
        textAlign: "center",
    }
})

export default TempBanner