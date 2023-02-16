import { useEffect } from 'react';
import { View, Button } from 'react-native';
import { 
    lockAsync, 
    lockPlatformAsync, 
    OrientationLock, 
    unlockAsync,
    addOrientationChangeListener
} from 'expo-screen-orientation';

export default function ScreenOrientation() {
    useEffect(() => {
        const subscription = addOrientationChangeListener(async listener => {
            const orientation = listener.orientationLock;

            await lockAsync(orientation);
        });
        
        return () => subscription.remove();
    }, []);

    const changeOrientation = async () => {
        await lockAsync(OrientationLock.LANDSCAPE);
    }

    const defaultOrientation = async () => {
        await unlockAsync();
    }

    const orientationByPlataform = async () => {
        await lockPlatformAsync();
    }

    return (
        <View>
            <Button title="Change Orientation" onPress={changeOrientation} />
            <Button title="Default Orientation" onPress={defaultOrientation} />
            <Button title="Orientation by Plataform" onPress={orientationByPlataform} />
        </View>
    )
}