import { StyleSheet, Text } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export default function PinchGesture() {
    const uri = 'https://docs.expo.dev/static/images/tutorial/background-image.png';

    const scaleImage = useSharedValue(1);
    const savedImageScale = useSharedValue(1);
    const textScale = useSharedValue(1);
    const textSavedScale = useSharedValue(1);

    const textStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { scale: withSpring(textScale.value) },
            ]
        }
    });
    
    const imageStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { scale: withSpring(scaleImage.value) },
            ]
        }
    });

    const pinchGesture = Gesture
    .Pinch()
    .onUpdate((e) => {
        textScale.value = textSavedScale.value * e.scale;
    })
    .onEnd(() => textSavedScale.value = textScale.value)

    const imagePinchGesture = Gesture
    .Pinch()
    .onUpdate((e) => scaleImage.value = savedImageScale.value * e.scale)
    .onEnd(() => savedImageScale.value = scaleImage.value);

    return (
        <GestureHandlerRootView style={styles.container}>
            <GestureDetector gesture={pinchGesture}>
                <Animated.View style={[textStyle]}>
                    <Text style={styles.text}>Image</Text>
                </Animated.View>
            </GestureDetector>
            <GestureDetector gesture={imagePinchGesture}>
                <Animated.Image style={[styles.image, imageStyle]} source={{ uri }} />
            </GestureDetector>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
    text: {
        color: '#fff',
        fontSize: 50,
    }
})