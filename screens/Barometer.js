import { View, Text, StyleSheet, Button } from "react-native";
import { Barometer } from 'expo-sensors';
import { useState } from "react";

export default function BarometerScreen() {
    const [{ pressure }, setData] = useState({ pressure: 0 });
    const [subscription, setSubscription] = useState(null);

    const toggleListener = () => {
        subscription ? subscribe() : unsubscribe();
    }

    const subscribe = () => {
        setSubscription(Barometer.addListener(setData))
    }
    
    const unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    }

    return (
        <View style={styles.container}>
            <Text>Barometer Listener: { subscription ? 'Active' : 'Inactive' }</Text>
            <Text>Pressure: { pressure } hPa</Text>
            <Button 
                style={styles.button} 
                title="Toggle Listener" 
                onPress={toggleListener} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginTop: 10,
    }
});