import { ScrollView, View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";

import { icons } from "../constants";

const HourPod = ({icon, time, temp}) => {
    return (
        <View style={styles.dataColumn}>
            <Text style={styles.dataText}>{time}</Text>
            <Image source={icon} style={styles.dataImage} />
            <Text style={styles.dataText}>{temp}</Text>
        </View>
    )
}

const WeatherScroll = ({}) => {

    return (

<ScrollView horizontal={true} contentContainerStyle={styles.weatherScroll}>

                    <View style={styles.dataRow}>

                        <HourPod 
                            time="Now"
                            icon={icons.shine}
                            temp="69°"
                        />
                        
                        <HourPod 
                            time="1pm"
                            icon={icons.shine}
                            temp="69°"
                        />

                        <HourPod 
                            time="2pm"
                            icon={icons.shine}
                            temp="69°"
                        />

                        <HourPod 
                            time="3pm"
                            icon={icons.shine}
                            temp="69°"
                        />          

                        <HourPod 
                            time="4pm"
                            icon={icons.shine}
                            temp="69°"
                        />

                        <HourPod 
                            time="5pm"
                            icon={icons.shine}
                            temp="69°"
                        />
                        
                    </View>

                </ScrollView>
    )

}

const styles = StyleSheet.create({
    dataRow: {
        flexDirection: "row",
        alignItems:"center",
        marginBottom:4,
        marginTop:4,
        flex: 1,
    },

    weatherScroll: {
        maxHeight:100,
        flex:1,
    },

    dataColumn: {
        marginLeft:16,
        marginRight:16,
        flex: 1,
    },

    dataText: {
        textAlign:"center",
        fontSize: 16,
        fontFamily: "HelveticaLight",
        color: "#1B1C2A",
    },

    dataImage: {
        verticalAlign:"middle",
    }
})

export default WeatherScroll