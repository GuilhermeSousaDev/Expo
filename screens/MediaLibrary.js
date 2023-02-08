import { useRef } from 'react';
import { View, Button } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';

export default function MediaLibraryScreen() {
    const containerRef = useRef();

    const handleSaveImageToLibrary = async () => {
        try {
            const localUri = await captureRef(containerRef, { 
                height: 440, 
                quality: 1, 
            });

            await MediaLibrary.saveToLibraryAsync(localUri);

            alert('Saved');
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <View ref={containerRef}>
            <Button title="Save To Library" onPress={handleSaveImageToLibrary} />
        </View>
    )
}