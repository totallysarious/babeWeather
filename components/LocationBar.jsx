import React from "react"
import { View, Text, StyleSheet} from "react-native"
import Triangle from "react-native-triangle"

const LocationBar = () => {
    return (
        <View style={styles.dataRow}>
            <Text style={styles.location}>Portland</Text>
            <Triangle
                width={18}
                height={16}
                color={"#FAD02C"}
                direction={"up"}
            />
            <Text style={styles.location}>7:12 am</Text>
            <Triangle
                width={18}
                height={16}
                color={"#E61F93"}
                direction={"down"}
            />
            <Text style={styles.location}>9:47 pm</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    dataRow: {
        flexDirection: "row",
        alignItems:"center",
        marginBottom:4,
        marginTop:4,
    },

    location: {
        fontSize: 16,
        fontFamily: "HelveticaLight",
        color: "#1B1C2A",
        marginTop: 4,
        marginBottom: 4,
        marginLeft:16,
        marginRight:"14%",
    }
})

export default LocationBar