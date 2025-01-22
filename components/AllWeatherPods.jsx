import React from "react";
import { View, Text, StyleSheet } from "react-native";

import SmallPod from "./SmallPod";

const AllWeatherPods = () => {
    return (
        <View style={styles.container}>
            <View style={styles.dataRow}>
                <SmallPod 
                    title="Wind"
                    threat="medium"
                    data1="speed: 14 mph"
                    data2="gust speed: 22 mph"
                />
        
                <SmallPod 
                    title="Precipitation"
                    threat="medium"
                    data1="intensity: 0.5 in"
                />
            </View>
        
            <View style={styles.dataRow}>
                <SmallPod 
                    title="Humidity"
                    threat="very high"
                    data1="dew point: 70"
                    data2="rel. humidity: 120%"
                />
        
                <SmallPod 
                    title="UV"
                    threat="very high"
                    data1="uv index: 8"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },

    dataRow: {
        flexDirection: "row",
        alignItems:"center",
        marginBottom:4,
        marginTop:4,
    }
})

export default AllWeatherPods