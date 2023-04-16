import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'

export default function SettingsSreen(props) {

    const { navigation } = props;

    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    }

    return (
        <SafeAreaView>
            <Text>Estamos en SettingsSreen</Text>
            <Text>Estamos en SettingsSreen</Text>
            <Text>Estamos en SettingsSreen</Text>
            <Text>Estamos en SettingsSreen</Text>
            <Text>Estamos en SettingsSreen</Text>
            <Text>Estamos en SettingsSreen</Text>
            <Text>Estamos en SettingsSreen</Text>
            <Text>Estamos en SettingsSreen</Text>
            <Text>Estamos en SettingsSreen</Text>
            <Text>Estamos en SettingsSreen</Text>
            <Text>Estamos en SettingsSreen</Text>
            <Button onPress={()=> goToPage("Home")} title='Go to Home'/>
        </SafeAreaView>
    )
}