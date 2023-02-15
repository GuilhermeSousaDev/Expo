import { useEffect } from 'react';
import { View, Button } from 'react-native';
import { addScreenshotListener, allowScreenCaptureAsync, preventScreenCaptureAsync } from 'expo-screen-capture';
import MediaLibrary from 'expo-media-library';

export default function ScreenCapture() {
    useEffect(() => {
        if (hasPermission()) {
            const subscription = addScreenshotListener(() => {
                alert('Screenshot in App!');
            });

            return () => subscription.remove();
        }
    }, []);

    const hasPermission = async () => {
        const { status } = await MediaLibrary.requestPermissionsAsync();
        return status === 'granted';
    }

    const active = async () => {
        await preventScreenCaptureAsync();
    }

    const desactive = async () => {
        await allowScreenCaptureAsync();
    }

    return (
        <View>
            <Button title="Active" onPress={active} />
            <Button title="Desactive" onPress={desactive} />
        </View>
    )
}