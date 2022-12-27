import { View, Text, StyleSheet } from 'react-native';
import * as Application from 'expo-application';

export default function ApplicationScreen() {

    return (
        <View style={styles.container}>
            <Text>Application Info :</Text>
            <Text>{ Application.applicationName }</Text>
            <Text>{ Application.nativeApplicationVersion }</Text>
            <Text>{ Application.androidId }</Text>
            <Text>{ Application.applicationId }</Text>
            <Text>{ Application.nativeBuildVersion }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});