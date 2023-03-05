import { useState } from 'react';
import { View, Button, Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default function WebBrowserScreen() {
  const [result, setResult] = useState(null);

  const handleOpenBrowserAsync = async () => {
    const result = await WebBrowser.openBrowserAsync('https://expo.dev');
    setResult(result);
  }

  return (
    <View>
      <Button title="Open Browser" onPress={handleOpenBrowserAsync} />
      <Text>{ result && JSON.stringify(result) }</Text>
    </View>
  )
}
