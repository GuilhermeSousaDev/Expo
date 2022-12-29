import { StyleSheet, View } from 'react-native';
import PlayingAudio from '../components/Audio/Playing';
import RecordingAudio from '../components/Audio/Recording';

export default function AudioScreen() {
    return (
        <View style={styles.container}>
            <PlayingAudio />
            <RecordingAudio />
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