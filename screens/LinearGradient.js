import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet } from 'react-native';

export default function LinearGradientScreen() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={styles.background}
            />
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.button}>
                <Text style={styles.text}>Sign in with Facebook</Text>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
    },
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },
      button: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
    },
      text: {
        backgroundColor: 'transparent',
        fontSize: 15,
        color: '#fff',
    },
});