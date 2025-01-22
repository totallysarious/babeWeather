import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton2 = ({ title, handlePress, isLoading }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={handlePress}
                activeOpacity={0.7}
                disabled={isLoading}
                >
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        width: "80%", 
        marginTop: 24,
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        borderColor: "#E61F93",
        borderStyle: "solid",
        borderWidth: 2,
        boxShadow: '1 1 5 #C01A7A',
    },

    text: {
        fontSize: 24, 
        fontFamily: "HelveticaLight",
        color: "#E61F93",
        textAlign: "center",
        paddingTop: 12,
    }

})

export default CustomButton2