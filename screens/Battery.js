import { View, Text, StyleSheet } from 'react-native';
import * as Battery from 'expo-battery';
import { useEffect, useState } from 'react';

export default function BatteryScreen() {
    const [batteryLevel, setBatteryLevel] = useState(null);
    const [charging, setCharging] = useState(null);
    const [subscription, setSubscription] = useState(null);

    const subscribe = async () => {
        const battery = await Battery.getBatteryLevelAsync();
        const isCharging = await Battery.getBatteryStateAsync();
       
        setBatteryLevel(battery);
        setCharging(isCharging);

        setSubscription(Battery.addBatteryLevelListener(({ batteryLevel }) => {
            setBatteryLevel(batteryLevel);
        }));
    }

    const unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    }

    useEffect(() => {
        subscribe();

        return () => unsubscribe();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Battery Level: { Math.round(batteryLevel * 100) }%</Text>
            <Text>Battery Charging: { charging==1? 'No Charging' : 'Charging' }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});