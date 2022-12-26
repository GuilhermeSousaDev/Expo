import { StyleSheet, Text } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export default function PinchGesture() {
    const uri = 'https://docs.expo.dev/static/images/tutorial/background-image.png';

    const scaleImage = useSharedValue(1);
    const savedImageScale = useSharedValue(1);
    
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const textStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: withSpring(translateX.value) },
                { translateY: withSpring(translateY.value) },
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

    const imagePinchGesture = Gesture
    .Pinch()
    .onUpdate((e) => scaleImage.value = savedImageScale.value * e.scale)
    .onEnd(() => savedImageScale.value = scaleImage.value);

    const onDrag = useAnimatedGestureHandler({
        onStart: (_, context) => {
            context.translateX = translateX.value;
            context.translateY = translateY.value;
        },
        onActive: (event, context) => {
            translateX.value = event.translationX + context.translateX;
            translateY.value = event.translationY + context.translateY;
        }
    });

    return (
        <GestureHandlerRootView style={styles.container}>
            <PanGestureHandler onGestureEvent={onDrag}>
                <Animated.View style={textStyle}>
                    <Text style={styles.text}>Image</Text>
                </Animated.View>
            </PanGestureHandler>
            <GestureDetector gesture={Gesture.Exclusive(imagePinchGesture)}>
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