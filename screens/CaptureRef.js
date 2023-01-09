import { useRef } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { captureRef } from 'react-native-view-shot';

export default function CaptureRefScreen() {
    const screenRef = useRef();

    const takePictureRef = async () => {
        const uri = await captureRef(screenRef, {
            result: 'tmpfile',
            height: 440,
            quality: 1,
            format: 'png',
        });

        console.log(uri);
    }

    return (
        <View style={styles.container} >
            <View ref={screenRef}>
                <View style={styles.screenContainer}>
                    <Text>Container</Text>
                </View>
            </View>
            <Button title="Take Picture" onPress={takePictureRef} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 500,
        height: 540,
    },
    screenContainer: {
        width: '100%',
        height: 520,
    }
});