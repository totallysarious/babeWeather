import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { icons } from "../constants";

const Header = () => {
    return (

        <View style={styles.headerRow}>
                    <Text style={styles.logo}>babeWeather</Text>
                    <TouchableOpacity 
                        onPress={() => router.push("/profile")}
                        style={styles.right}
                        >
                        <Image source={icons.account}/>
                    </TouchableOpacity>
                </View>
    )
}

const styles = StyleSheet.create({
    headerRow: {
        flexDirection: "row",
    },

    logo: {
        fontSize: 24, 
        fontFamily: "GimletDisplayRegular",
        color: "#1B1C2A",
        marginLeft: 16,
        paddingTop: 8,
      },
    
      right: {
        marginLeft: "40%",
    },

})

export default Header