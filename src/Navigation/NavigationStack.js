import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from '../Screens/HomeScreen';
import SettingsSreen from '../Screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Settings" component={SettingsSreen} />
        </Stack.Navigator>
    )
}