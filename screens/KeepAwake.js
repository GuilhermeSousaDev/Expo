import { View, Button, StyleSheet } from 'react-native';
import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';

export default function KeepAwakeScreen() {
    const active = () => {
        activateKeepAwake();
        alert('Activated');
    }

    const desactive = () => {
        deactivateKeepAwake();
        alert('Desactivate');
    }

    return (
        <View style={styles.container}>
            <Button title="Active" onPress={active} />
            <Button title="Disable" onPress={desactive} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20
    }
})