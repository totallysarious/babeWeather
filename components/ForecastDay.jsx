import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

const DayPod = ({ style, high, low, day, dayIcon, nightIcon, style2 }) => {
    return (
        <TouchableOpacity style={styles.pod}>
            <View style={style}>
                    <Image source={icons.arrowUp} style={styles.arrow}/>
                    <Text style={styles.mainText}>{high}</Text>
                    <Image source={icons.arrowDown} style={styles.arrow}/>
                    <Text style={styles.mainText}>{low}</Text>
                    <Text style={styles.dayText}>{day}</Text>
            </View>
                <View style={style2}>
                    <Image source={dayIcon} style={styles.dayIcon} />
                    <Image source={nightIcon} style={styles.nightIcon} />
                </View>
        </TouchableOpacity>
    )
}

const ForecastDay = () => {
    return (
        <View style={styles.main}>

            //Today
           <DayPod
                style={styles.long}
                high="69°"
                low="69°"
                day="M"
                dayIcon={icons.shine}
                nightIcon={icons.night}
                style2={styles.short}
            />

            //Forecast

            <DayPod
                style={styles.long2}
                high="69°"
                low="69°"
                day="T"
                dayIcon={icons.shine}
                nightIcon={icons.night}
                style2={styles.short2}
            />

            <DayPod
                style={styles.long3}
                high="69°"
                low="69°"
                day="W"
                dayIcon={icons.shine}
                nightIcon={icons.night}
                style2={styles.short3}
            />

            <DayPod
                style={styles.long4}
                high="69°"
                low="69°"
                day="Th"
                dayIcon={icons.shine}
                nightIcon={icons.night}
                style2={styles.short4}
            />

            <DayPod
                style={styles.long5}
                high="69°"
                low="69°"
                day="F"
                dayIcon={icons.shine}
                nightIcon={icons.night}
                style2={styles.short5}
            />

            <DayPod
                style={styles.long6}
                high="69°"
                low="69°"
                day="Sa"
                dayIcon={icons.shine}
                nightIcon={icons.night}
                style2={styles.short6}
            />

            <DayPod
                style={styles.long}
                high="69°"
                low="69°"
                day="Su"
                dayIcon={icons.shine}
                nightIcon={icons.night}
                style2={styles.short}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    pod: {
        marginTop:16,
    },

    long: {
        width:320,
        height:72,
        backgroundColor:"#E61F93",
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        flexDirection:"row",
    },

    short: {
        width:180,
        height:72,
        borderTopRightRadius:60,
        borderBottomRightRadius:60,
        borderBlockColor:"#F49FD1",
        borderRightColor:"#F49FD1",
        borderLeftColor:"#FFFFFF",
        borderStyle:"solid",
        borderWidth:4,
        flexDirection:"row",
        marginTop:4,
    },

    dayIcon: {
        marginLeft:16,
        marginRight:8,
        marginTop:2,
    },

    nightIcon: {
        marginRight:16,
        marginLeft:8,
        marginTop:2,
    },

    mainText: {
        fontSize: 36, 
        fontFamily: "GimletDisplayRegular",
        color: "#FFFFFF",
        marginLeft: 16,
        marginTop: 16,
    },

    arrow: {
        marginTop:24,
        marginLeft:16,
    },

    dayText: {
        fontSize: 48, 
        fontFamily: "GimletDisplayRegular",
        color: "#FFFFFF",
        marginLeft: 16,
        marginTop: 6,
    },

    long2: {
        width:320,
        height:72,
        backgroundColor:"#FF8210",
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        flexDirection:"row",
    },

    short2: {
        width:180,
        height:72,
        borderTopRightRadius:60,
        borderBottomRightRadius:60,
        borderBlockColor:"#FFB876",
        borderRightColor:"#FFB876",
        borderLeftColor:"#FFFFFF",
        borderStyle:"solid",
        borderWidth:4,
        flexDirection:"row",
        marginTop:4,
    },

    long3: {
        width:320,
        height:72,
        backgroundColor:"#FAD02C",
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        flexDirection:"row",
    },

    short3: {
        width:180,
        height:72,
        borderTopRightRadius:60,
        borderBottomRightRadius:60,
        borderBlockColor:"#FDEBA5",
        borderRightColor:"#FDEBA5",
        borderLeftColor:"#FFFFFF",
        borderStyle:"solid",
        borderWidth:4,
        flexDirection:"row",
        marginTop:4,
    },
    
    long4: {
        width:320,
        height:72,
        backgroundColor:"#56AEFF",
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        flexDirection:"row",
    },

    short4: {
        width:180,
        height:72,
        borderTopRightRadius:60,
        borderBottomRightRadius:60,
        borderBlockColor:"#9ED1FF",
        borderRightColor:"#9ED1FF",
        borderLeftColor:"#FFFFFF",
        borderStyle:"solid",
        borderWidth:4,
        flexDirection:"row",
        marginTop:4,
    },

    long5: {
        width:320,
        height:72,
        backgroundColor:"#87CB28",
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        flexDirection:"row",
    },

    short5: {
        width:180,
        height:72,
        borderTopRightRadius:60,
        borderBottomRightRadius:60,
        borderBlockColor:"#BAE184",
        borderRightColor:"#BAE184",
        borderLeftColor:"#FFFFFF",
        borderStyle:"solid",
        borderWidth:4,
        flexDirection:"row",
        marginTop:4,
    },

    long6: {
        width:320,
        height:72,
        backgroundColor:"#A1A9FE",
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        flexDirection:"row",
    },

    short6: {
        width:180,
        height:72,
        borderTopRightRadius:60,
        borderBottomRightRadius:60,
        borderBlockColor:"#D7DAFF",
        borderRightColor:"#D7DAFF",
        borderLeftColor:"#FFFFFF",
        borderStyle:"solid",
        borderWidth:4,
        flexDirection:"row",
        marginTop:4,
    },

})

export default ForecastDay