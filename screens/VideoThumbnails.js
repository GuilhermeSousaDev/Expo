import { useState } from 'react';
import { View, Button, Image, Text } from 'react-native';
import * as VideoThumbnails from 'expo-video-thumbnails';

export default function VideoThumbnailsScreen() {
  const [image, setImage] = useState(null);

  const generateThumbnail = async () => {
    try {
      const { uri } = await VideoThumbnails.getThumbnailAsync(
        'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        {
          time: 15000,
        },
      );
      setImage(uri);
    } catch (e) {
      console.warn(e);
    }
  }

  return (
    <View>
      <Button onPress={generateThumbnail} title="Generate Thumbnail" />
      { image &&
          <Image
            source={{ uri: image }}
            style={{ width: 200, height: 200, mt: 5 }}
          />
      }
      <Text>{ image }</Text>
    </View>
  )
}
