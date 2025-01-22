import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet } from "react-native";

import Header from "../../components/Header";
import ForecastHeader from "../../components/ForecastHeader";
import ForecastDay from "../../components/ForecastDay";

const DATA = [
    <Header />,
    <ForecastHeader />,
    <ForecastDay />
]

const ListItem = ({ item }) => {
    return (
        <View> {item} </View>
    )
}

const Forecast = ({}) => {
    return (

        <SafeAreaView style={styles.background}>
            <FlatList
                data={DATA}
                keyExtractor={(item, index) => String(index)}
                renderItem={ListItem}
            />
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#FFFFFF",
        height: "100%",
    }
})

export default Forecast