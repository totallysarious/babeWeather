import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { icons } from "../constants";

const WarningBanner = () => {
    return (
        <View style={styles.container}>
            <View style={styles.warningRow}>
                <Image source={icons.warning}/>
                <Text style={styles.warning}>Warning:</Text>
                <Text style={styles.warningBody}> Extreme heat advisory.</Text> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },

    warningRow: {
        flexDirection: "row",
        alignItems:"center",
        marginBottom:16,
        marginTop:16,
    },

    warning: {
        fontSize:16,
        fontFamily:"GimletDisplayBlack",
        textAlign:"center",
    },

    warningBody: {
        fontSize:16,
        fontFamily:"HelveticaLight",
        textAlign:"center",
    }
})

export default WarningBanner