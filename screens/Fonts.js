import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { View, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

export default function FontsScreen() {
    const [fontsLoaded] = useFonts({
        'Inter-Black': require('../assets/fonts/Inter Black 900.otf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);


    if (!fontsLoaded) {
        return null;
    }
    return (
        <View onLayout={onLayoutRootView}>
            <Text style={{ fontFamily: 'Inter-Black', fontSize: 30 }}>Inter Black</Text>
            <Text style={{ fontSize: 30 }}>Platform Default</Text>
        </View>
    )
}