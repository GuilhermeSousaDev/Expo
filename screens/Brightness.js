import { useCallback, useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import * as Brightness from 'expo-brightness';

export default function BrightnessScreen() {
    const [brightness, setBrightness] = useState();
    const [defineBrightness, setDefineBrightness] = useState(0.5);

    useEffect(() => {
        (async () => {
            const { status } = await Brightness.requestPermissionsAsync();

            if (status === 'granted') {
                await Brightness.setSystemBrightnessAsync(0.1);
                setBrightness(await Brightness.getSystemBrightnessAsync());
            }
        })();
    }, []);

    const handleBrightnessByInputValue = useCallback(async (value) => {
        setDefineBrightness(value / 100 > 1 ? 1 : value / 100);

        await Brightness.setSystemBrightnessAsync(defineBrightness);
    }, [defineBrightness]);

    return (
        <View style={styles.container}>
            <Text>Brightness Module Example</Text>
            <Text>Brightness: { brightness }</Text>
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.input}
                    keyboardType='numeric'
                    placeholder='Value' 
                    onChangeText={handleBrightnessByInputValue} 
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 500,
        height: 540,
    },
    inputView: {
        backgroundColor: '#000',
        padding: 10,
        marginTop: 10
    },
    input: {
        backgroundColor: '#fff',
        textAlign: 'center',
    }
});