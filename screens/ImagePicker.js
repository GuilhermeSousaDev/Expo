import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Button } from 'react-native';
import { launchImageLibraryAsync } from 'expo-image-picker';
import IconButton from '../components/ImagePicker/IconButton';
import CircleButton from '../components/ImagePicker/CircleButton';
import EmojiPicker from '../components/ImagePicker/EmojiPicker';
import EmojiList from '../components/ImagePicker/EmojiList';
import EmojiSticker from '../components/ImagePicker/EmojiSticker';

export default function ImagePicker() {
  const [selectedImage, setSelectedImage] = useState();
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);

  const handlePickImageAsync = async () => {
    const result = await launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    try {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } catch (error) {
      console.log(error);
    }
  }

  const onReset = () => {
    setShowAppOptions(false);
    setPickedEmoji(null);
  }

  const onAddSticker = () => setIsModalVisible(true);

  const onModalClose = () => setIsModalVisible(false);

  const onSaveImageAsync = () => {

  }

  const defaultImage = 'https://docs.expo.dev/static/images/tutorial/background-image.png';
  const imageSource = selectedImage != null ? { uri: selectedImage } : { uri: defaultImage }; 

  return (
    <View style={styles.container}>
      <View>
        <Image 
          style={styles.image} 
          source={imageSource} 
        />
        {pickedEmoji !== null ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji} /> : null}
      </View>

      { showAppOptions? 
        (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon="refresh" label="Reset" onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
            </View>
          </View>
        ) 
        : (
          <View style={styles.footerContainer}>
            <Button title="Choose a Photo" onPress={handlePickImageAsync} />
            <Button title="Use this photo" onPress={() => setShowAppOptions(!showAppOptions)} />
          </View>
        ) 
      }

      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
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
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
