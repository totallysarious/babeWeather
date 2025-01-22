import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { signIn } from '../../lib/appwrite'

const LogIn = () => {


    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = async () => {

        if(!form.email || !form.password) {
            Alert.alert('Error', 'Please fill in all fields!')
        }

        setIsSubmitting(true);

        try {
            const result = await signIn(form.email, form.password)

            router.replace('../tabs/home')
        } catch (error) {
            Alert.alert('Error', error.message)
        } finally {
            setIsSubmitting(false)
        }
    }
    
    return (
        <SafeAreaView style={styles.background}>
            <ScrollView contentContainerStyle={styles.main}>
                <View style={styles.container}>
                    <Text style={styles.gimletDisplayRegular}>Welcome back, babe.</Text>

                    <FormField 
                        title="Email"
                        value={form.email}
                        placeholder="email"
                        handleChangeText={(e) => setForm({...form,
                            email: e 
                        })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />

                    <FormField 
                        title="Password"
                        value={form.password}
                        placeholder="password"
                        handleChangeText={(e) => setForm({...form,
                            password: e 
                        })}
                    />

                    <Text style={styles.helveticaLight}>Forgot Password?</Text>

                    <CustomButton
                        title="Login"
                        handlePress={() => router.push("/index")}
                    />

                    <View style={styles.link}>
                        <Text style={styles.helveticaLight}>New here?</Text>
                        <Link href="/sign-up" style={styles.helveticaBold}> Sign up.</Link>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#FFFFFF",
    },

    main: {
      height: "100%",
    },
  
    container: {
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center",
    },
  
    gimletDisplayRegular: {
      fontSize: 42, 
      fontFamily: "GimletDisplayRegular",
      textAlign: "center",
      color: "#1B1C2A",
    },

    helveticaLight: {
        fontSize: 16,
        fontFamily: "HelveticaLight",
        textAlign: "center",
        color: "#868DD4",
        paddingTop: 24,
    },

    helveticaBold: {
        fontSize: 16,
        fontFamily: "HelveticaBold",
        textAlign: "center",
        color: "#868DD4",
        paddingTop: 24,
    },

    link: {
        flexDirection:"row",
    }
  
  })

export default LogIn