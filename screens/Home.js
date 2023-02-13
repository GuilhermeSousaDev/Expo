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
                <Button title="Crypto" onPress={() => navigate('Crypto')} />
                <Button title="Datatime" onPress={() => navigate('Datatime')} />
                <Button title="DocumentPicker" onPress={() => navigate('DocumentPicker')} />
                <Button title="FaceDetector" onPress={() => navigate('FaceDetector')} />
                <Button title="FileSystem" onPress={() => navigate('FileSystem')} />
                <Button title="Firebase" onPress={() => navigate('Firebase')} />
                <Button title="Fonts" onPress={() => navigate('Fonts')} />
                <Button title="Gesture" onPress={() => navigate('Gesture')} />
                <Button title="GlView" onPress={() => navigate('GlView')} />
                <Button title="Haptics" onPress={() => navigate('Haptics')} />
                <Button title="ImageManipulator" onPress={() => navigate('ImageManipulator')} />
                <Button title="ImageLibrary" onPress={() => navigate('ImageLibrary')} />
                <Button title="KeepAwake" onPress={() => navigate('KeepAwake')} />
                <Button title="LinearGradient" onPress={() => navigate('LinearGradient')} />
                <Button title="LocalAuth" onPress={() => navigate('LocalAuth')} />
                <Button title="Localization" onPress={() => navigate('Localization')} />
                <Button title="Location" onPress={() => navigate('Location')} />
                <Button title="MailCompose" onPress={() => navigate('MailCompose')} />
                <Button title="MapView" onPress={() => navigate('MapView')} />
                <Button title="MediaLibrary" onPress={() => navigate('MediaLibrary')} />
                <Button title="NavigationBar" onPress={() => navigate('NavigationBar')} />
                <Button title="NetInfo" onPress={() => navigate('NetInfo')} />
                <Button title="Notifications" onPress={() => navigate('Notifications')} />
                <Button title="Pedometer" onPress={() => navigate('Pedometer')} />
                <Button title="Print" onPress={() => navigate('Print')} />
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