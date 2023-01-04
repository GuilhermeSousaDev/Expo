import { View, Text, StyleSheet, Button } from 'react-native';

export default function Home({ navigation }) {
    const navigate = (route) => {
        navigation.navigate(route);
    }

    return (
        <View style={styles.container}>
            <Text>Home</Text>   

            <View>
                <Button title="ImagePicker" onPress={() => navigate('ImagePicker')} />
                <Button title="PinchGesture" onPress={() => navigate('PinchGesture')} />
                <Button title="Authentication" onPress={() => navigate('Authentication')} />
                <Button title="Accelerometer" onPress={() => navigate('Accelerometer')} />
                <Button title="Application" onPress={() => navigate('Application')} />
                <Button title="AsyncStorage" onPress={() => navigate('AsyncStorage')} />
                <Button title="Audio" onPress={() => navigate('Audio')} />
                <Button title="AuthSession" onPress={() => navigate('AuthSession')} />
                <Button title="BackgroundFetch" onPress={() => navigate('BackgroundFetch')} />
                <Button title="BarcodeScanner" onPress={() => navigate('BarcodeScanner')} />
                <Button title="Barometer" onPress={() => navigate('Barometer')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 540,
    },
});