import { View, Button, Text } from 'react-native';
import * as Haptics from 'expo-haptics';

export default function HapticsScreen() {
    return (
        <View>
            <Text>Haptics SelectionAsync</Text>
            <View>
                <Button title="Selection" onPress={() => Haptics.selectionAsync()} />
            </View>
            <Text>Haptics.notificationAsync</Text>
            <View>
                <Button
                    title="Success"
                    onPress={() => Haptics.notificationAsync(
                        Haptics.NotificationFeedbackType.Success,
                    )}
                />
                <Button
                    title="Error"
                    onPress={
                        () =>
                            Haptics.notificationAsync(
                                Haptics.NotificationFeedbackType.Error
                            )
                    }
                />
                <Button
                    title="Warning"
                    onPress={
                        () =>
                            Haptics.notificationAsync(
                                Haptics.NotificationFeedbackType.Warning
                            )
                    }
                />
            </View>
            <Text>Haptics.impactAsync</Text>
            <View>
                <Button
                    title="Light"
                    onPress={
                        () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                    }
                />
                <Button
                    title="Medium"
                    onPress={
                        () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
                    }
                />
                <Button
                    title="Heavy"
                    onPress={
                        () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
                    }
                />
            </View>
        </View>
    )
}