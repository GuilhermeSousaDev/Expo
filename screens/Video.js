import { useState, useRef } from 'react';
import { View, Button } from 'react-native';
import { Video } from 'expo-av';

export default function VideoScreen() {
  const videoRef = useRef();
  const [status, setStatus] = useState({});

  return (
    <View>
      <Video
        ref={videoRef}
        style={{ width: 300, height: 300 }}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        isLooping
        useNativeControls
        resizeMode="contain"
        onPlaybackStatus={status => setStatus(() => status)}
      />
      <Button
        title={ status.isPlaying ? 'Pause' : 'Play' }
        onPress={() => setStatus(status.isPlaying ?
          videoRef.current.pauseAsync()
          : videoRef.current.playAsync())}
      />
    </View>
  )
}
