import { Stack, Tabs, Redirect } from "expo-router";
import { Image, View, Text, StyleSheet } from "react-native";

import { icons } from '../../constants';

const TabIcon = ({ icon, name, focused }) => {
    return (
        <View style={styles.tabIcon}>
            <Image 
                source={icon}
                resizeMode="contain"
            />
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
        <Tabs
            screenOptions={{
                tabBarShowLabel: false
            }}
        >
           <Tabs.Screen 
            name="allWeather"
            options={{
                title: 'All Weather',
                headerShown: false, 
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        icon={icons.allWeather}
                        name="All Weather"
                        focused={focused}
                    />
                )
            }}
           /> 

            <Tabs.Screen 
            name="home"
            options={{
                title: 'Home',
                headerShown: false, 
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        icon={icons.home}
                        name="Home"
                        focused={focused}
                    />
                )
            }}
           /> 

           <Tabs.Screen 
            name="forecast"
            options={{
                title: 'Forecast',
                headerShown: false, 
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        icon={icons.forecast}
                        name="Forecast"
                        focused={focused}
                    />
                )
            }}
           /> 
        </Tabs>
    </>
  )
}

const styles = StyleSheet.create({
    tabIcon: {
        height: "100%",
    }
})

export default TabsLayout