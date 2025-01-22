import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {

  const [fontsLoaded, error ] = useFonts({
    "GimletDisplayRegular": require("../assets/fonts/GimletDisplay-Regular.ttf"),
    "GimletDisplayItalic": require("../assets/fonts/GimletDisplay-Italic.ttf"),
    "HelveticaBold": require("../assets/fonts/HelveticaBold.ttf"),
    "HelveticaLight": require("../assets/fonts/helvetica-light.ttf"),
    "GimletDisplayBlack": require("../assets/fonts/GimletDisplay-Black.ttf"),
    "GimletDisplayLightItalic": require("../assets/fonts/GimletDisplay-LightItalic.ttf"),
    //"HelveticaObliqueLight": require("../assets/fonts/helvetica-oblique-light.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }


  return (
    <View>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="profile" options={{ headerShown: false }} />
      </Stack>
   </View>
  );
};

export default RootLayout;