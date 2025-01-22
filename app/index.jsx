import { Redirect, router } from "expo-router";
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "../components/CustomButton";
import CustomButton2 from "../components/CustomButton2";

export default function Index() {

  return (

    <SafeAreaView style={styles.background}>
      <ScrollView contentContainerStyle={styles.main}>


        <View style={styles.container}>
          <Text style={styles.gimletDisplayRegular}>babeWeather</Text>

           <CustomButton
           title="Login"
           handlePress={() => router.push("/log-in")}
           />

           <CustomButton2
           title="Sign Up"
           handlePress={() => router.push("/sign-up")}
           />

          <CustomButton2
           title="Weather Playground"
           handlePress={() => router.push("/allWeather")}
           />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
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
    color: "#1B1C2A",
  }

})