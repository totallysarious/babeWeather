import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import WeatherScroll from "../../components/WeatherScroll";
import Header from "../../components/Header";
import LocationBar from "../../components/LocationBar";
import TempBanner from "../../components/TempBanner";
import Summary from "../../components/Summary";
import WarningBanner from "../../components/WarningBanner";
import AllWeatherPods from "../../components/AllWeatherPods";

const DATA = [
    <Header />,
    <LocationBar />,
    <TempBanner />,
    <Summary />,
    <WeatherScroll />,
    <WarningBanner />,
    <AllWeatherPods />,
]

const ListItem = ({ item }) => {
    return (
        <View> {item} </View>
    )
}

const AllWeather = ({}) => {
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
    }
})

export default AllWeather