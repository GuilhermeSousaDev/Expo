import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

export default function Home({ navigation }) {
    const navigate = (route) => {
        navigation.navigate(route);
    }

    return (
        <View style={styles.container}>
            <Text>Home</Text>   

            <ScrollView>
                <Button title="ImagePicker" onPress={() => navigate('ImagePicker')} />
                <Button title="PinchGesture" onPress={() => navigate('PinchGesture')} />
                <Button title="Accelerometer" onPress={() => navigate('Accelerometer')} />
                <Button title="Application" onPress={() => navigate('Application')} />
                <Button title="AsyncStorage" onPress={() => navigate('AsyncStorage')} />
                <Button title="Audio" onPress={() => navigate('Audio')} />
                <Button title="AuthSession" onPress={() => navigate('AuthSession')} />
                <Button title="BackgroundFetch" onPress={() => navigate('BackgroundFetch')} />
                <Button title="BarcodeScanner" onPress={() => navigate('BarcodeScanner')} />
                <Button title="Barometer" onPress={() => navigate('Barometer')} />
                <Button title="Battery" onPress={() => navigate('Battery')} />
                <Button title="Brightness" onPress={() => navigate('Brightness')} />
                <Button title="Calendar" onPress={() => navigate('Calendar')} />
                <Button title="Camera" onPress={() => navigate('Camera')} />
                <Button title="CaptureRef" onPress={() => navigate('CaptureRef')} />
                <Button title="Checkbox" onPress={() => navigate('Checkbox')} />
                <Button title="Clipboard" onPress={() => navigate('Clipboard')} />
                <Button title="Contacts" onPress={() => navigate('Contacts')} />
            </ScrollView>
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