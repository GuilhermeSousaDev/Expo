import { View, Text } from 'react-native';
import { useEffect } from 'react';
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency';

export default function TrackingTransparencyScreen() {
  useEffect(() => {
    (async () => {
        const { status } = await requestTrackingPermissionsAsync();

        if (status === 'granted') {
          console.log('Yay! I have user permission to track data');
        }
    })();
  }, []);

  return (
    <View>
      <Text>Tracking Transparency Module Example</Text>
    </View>
  )
}
