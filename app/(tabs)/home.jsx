import React from "react";
import { View, StyleSheet, SafeAreaView, FlatList } from "react-native";

import WeatherScroll from "../../components/WeatherScroll";
import Header from "../../components/Header";
import LocationBar from "../../components/LocationBar";
import TempBanner from "../../components/TempBanner";
import Summary from "../../components/Summary";
import WarningBanner from "../../components/WarningBanner";

const DATA = [
    <Header />,
    <LocationBar />,
    <TempBanner />,
    <Summary />,
    <WeatherScroll />,
    <WarningBanner />,
]

const ListItem = ({ item }) => {
    return (
        <View> {item} </View>
    )
}

const Home = ({}) => {
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

export default Home