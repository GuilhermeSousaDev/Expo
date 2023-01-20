import { Text, StyleSheet } from 'react-native';
import { GestureHandlerRootView, GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export default function GestureScreen() {
    const textPositionX = useSharedValue(0);
    const textPositionY = useSharedValue(0);
    const initialPositionX = useSharedValue(0);
    const initialPositionY = useSharedValue(0);

    const panGesture = Gesture.Pan()
    .onStart(e => {
        initialPositionX.value = e.translationX;
        initialPositionY.value = e.translationY;
    })
    .onUpdate(e => {
        textPositionX.value = e.translationX;
        textPositionY.value = e.translationY;
    })
    .onEnd(() => {
        textPositionX.value = initialPositionX.value;
        textPositionY.value = initialPositionY.value;
    });

    const textStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: withSpring(textPositionX.value) },
                { translateY: withSpring(textPositionY.value) },
            ]
        }
    });

    return (
        <GestureHandlerRootView style={styles.container}>
            <GestureDetector gesture={panGesture}>
                <Animated.View style={[textStyle]}>
                    <Text style={[styles.text]}>Pan Gesture</Text>
                </Animated.View>
            </GestureDetector>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 520,
    },
    text: {
        fontSize: 40,
    }
});