import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image} 
        source={{ uri: 'https://docs.expo.dev/static/images/tutorial/background-image.png' }} 
      />

      <View style={styles.footerContainer}>
        <Button title="Choose a Photo" />
        <Button title="Use This Photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 10
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20
  },
});
