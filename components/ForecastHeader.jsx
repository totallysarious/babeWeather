import React from "react";
import { View, Image, StyleSheet } from "react-native";

import { images } from "../constants";

const ForecastHeader = () => {
    return (
        <View style={styles.main}>
            <Image source={images.forecastHeader} />
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default ForecastHeader