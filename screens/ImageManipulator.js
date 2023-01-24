import { useState, useEffect } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import { Asset } from 'expo-asset';
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';

export default function ImageManipulatorScreen() {
    const [ready, setReady] = useState(false);
    const [image, setImage] = useState(null)

    useEffect(() => {
        (async () => {
            const image = Asset.fromModule(require('../assets/favicon.png'));
            await image.downloadAsync();

            setImage(image);
            setReady(true);
        })();
    }, []);

    const manipulateImage = async () => {
        const manipulateResult = await manipulateAsync(
            image.localUri || image.uri,
            [{ rotate: 90 }, { flip: FlipType.Vertical }],
            { compress: 1, format: SaveFormat.PNG },
        );
        
        setImage(manipulateResult);
    }

    const _renderImage = () => (
        <View style={styles.imageContainer}>
          <Image source={{ uri: image.localUri || image.uri }} style={styles.image} />
        </View>
    );

    return (
        <View style={styles.container}>
            { ready && image && _renderImage() }
            <Button title="Rotate and Flip" onPress={manipulateImage} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 530,
    },
    imageContainer: {
        width: 200,
        height: 200,
    },
    image: {
        width: 200,
        height: 200,
    }
});