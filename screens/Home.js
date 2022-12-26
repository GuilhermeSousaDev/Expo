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