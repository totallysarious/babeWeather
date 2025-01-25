import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import { View } from "react-native";

// Prevent SplashScreen from auto-hiding until fonts are loaded
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  // Load fonts with the useFonts hook
  const [fontsLoaded, error] = useFonts({
    "GimletDisplayRegular": require("../assets/fonts/GimletDisplay-Regular.ttf"),
    "GimletDisplayItalic": require("../assets/fonts/GimletDisplay-Italic.ttf"),
    "HelveticaBold": require("../assets/fonts/HelveticaBold.ttf"),
    "HelveticaLight": require("../assets/fonts/helvetica-light.ttf"),
    "GimletDisplayBlack": require("../assets/fonts/GimletDisplay-Black.ttf"),
    "GimletDisplayLightItalic": require("../assets/fonts/GimletDisplay-LightItalic.ttf"),
    // "HelveticaObliqueLight": require("../assets/fonts/helvetica-oblique-light.ttf"),
  });

  // Effect hook to hide splash screen after fonts load
  useEffect(() => {
    if (error) {
      console.error("Font loading error:", error);
      return;
    }
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Hide splash screen once fonts are loaded
    }
  }, [fontsLoaded, error]);

  // If fonts are not loaded, return null to prevent rendering until ready
  if (!fontsLoaded) {
    return null;
  }

  return (
      <View style={{ flex: 1 }}>
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
