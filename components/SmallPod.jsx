import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import React from "react"

const SmallPod = ({ title, threat, data1, data2 }) => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.threat}>{threat}</Text>
                </View>
                
                <Text style={styles.data}>{data1}</Text>
                <Text style={styles.data}>{data2}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 164,
        height: 128,
        backgroundColor: "#FEF8E1",
        borderRadius: 20,
        margin: 8,
    },

    header: {
        width: 164,
        height: 64,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#FAD02C",
        paddingTop: 6,
        marginBottom: 4,
    },

    title: {
        fontSize: 20,
        fontFamily: "GimletDisplayBlack",
        textAlign: "center",
        color: "#FFFFFF",
    },

    threat: {
        fontSize: 24,
        fontFamily: "GimletDisplayLightItalic",
        textAlign: "center",
        color: "#FFFFFF",
    },

    data: {
        fontSize: 16,
        fontFamily: "HelveticaLight",
        textAlign: "center",
        color: "#1B1C2A",
        marginTop: 8,
    }

})

export default SmallPod