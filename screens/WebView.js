import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

export default function WebViewScreen() {
    return (
        <View>
            <WebView
                style={styles.container}
                source={{ uri: 'https://expo.dev' }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});