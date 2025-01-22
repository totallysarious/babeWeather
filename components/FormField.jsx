import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { icons } from "../constants"

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View style={styles.container}>
                <TextInput 
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#C9CEFE"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                    style={styles.ph}
                />

                {title === 'Password' && (
                    <TouchableOpacity onPress={() =>
                        setShowPassword(!showPassword)}>
                        <Image source={!showPassword ? icons.eye : icons.eyehide } />
                    </TouchableOpacity>
                )}


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 54,
        width: "80%", 
        marginTop: 16,
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        borderColor: "#C9CEFE",
        borderStyle: "solid",
        borderWidth: 2,
        boxShadow: '2 2 2 #E4E6FF',
    },

    ph: {
        paddingLeft: 12,
        paddingTop: 13,
        fontSize: 20,
        color: "#A1A9FE",
    },
})

export default FormField