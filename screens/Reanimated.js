import { View, Button } from 'react-native';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
} from 'react-native-reanimated';

export default function ReanimatedScreen() {
    const width = useSharedValue(10);

    const config = {
        duration: 500,
        easing: Easing.bezier(0.5, 0.01, 0, 1),
    };

    const style = useAnimatedStyle(() => {
        return {
            width: withTiming(width.value, config),
        };
    });

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}>
            <Animated.View
                style={[{ width: 100, height: 80, backgroundColor: 'black', margin: 30 }, style]}
            />
            <Button
                title="toggle"
                onPress={() => {
                    width.value = Math.random() * 350;
                }}
            />
        </View>
    )
}