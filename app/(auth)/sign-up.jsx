import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { createUser } from '../../lib/appwrite'
import { Link } from 'expo-router'

const SignUp = () => {

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
            const result = await createUser(form.email, form.password)

            router.replace('/home')
        } catch (error) {
            Alert.alert('Error', error.message)
        } finally {
            setIsSubmitting(false)
        }

        createUser();
    }
    
    return (
        <SafeAreaView style={styles.background}>
            <ScrollView contentContainerStyle={styles.main}>
                <View style={styles.container}>

                    <View style={styles.link}>
                        <Text style={styles.gimletDisplayRegular}>Welcome to</Text>
                        <Text style={styles.gimletDisplayItalic}> your</Text> 
                    </View>
                    
                    <Text style={styles.gimletDisplayRegular}>weather app,</Text>
                    <Text style={styles.gimletDisplayRegular}>babe.</Text>

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
                        otherStyles="mt-7"
                    />

                    <View style={styles.spacer}></View>

                    <CustomButton
                        title="Create Account"
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />

                    <View style={styles.link}>
                        <Text style={styles.helveticaLight}>Have an account?</Text>
                        <Link href="/log-in" style={styles.helveticaBold}> Log in.</Link>
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

    gimletDisplayItalic: {
        fontSize: 42, 
        fontFamily: "GimletDisplayItalic",
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
    },

    spacer: {
        height: 8,
    }
  
  })

export default SignUp