import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Button } from 'react-native';
import { launchImageLibraryAsync } from 'expo-image-picker';

export default function ImagePicker() {
  const [selectedImage, setSelectedImage] = useState();

  const handlePickImageAsync = async () => {
    const result = await launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    try {
      setSelectedImage(result.assets[0].uri);
    } catch (error) {
      console.log(error);
    }
  }

  const defaultImage = 'https://docs.expo.dev/static/images/tutorial/background-image.png';
  const imageSource = selectedImage != null ? { uri: selectedImage } : { uri: defaultImage }; 

  return (
    <View style={styles.container}>
      <Image 
        style={styles.image} 
        source={imageSource} 
      />

      <View style={styles.footerContainer}>
        <Button title="Choose a Photo" onPress={handlePickImageAsync} />
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
