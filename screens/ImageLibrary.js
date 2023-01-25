import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { launchImageLibraryAsync } from 'expo-image-picker';
import { useState } from 'react';

export default function ImageLibraryScreen() {
    const [image, setImage] = useState(null);

    const handleLaunchLibrary = async () => {
        const result = await launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        try {
            setImage(result.assets[0].uri);
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <View>
            <Text>Image Library - With Expo ImagePicker</Text>
            <Button title="Launch Library" onPress={handleLaunchLibrary} />

            { image ? 
                <Image 
                    style={styles.image} 
                    source={{ uri: image }} 
                /> 
            : ''}
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200
    }
});