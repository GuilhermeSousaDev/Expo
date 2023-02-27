import { View, Button } from 'react-native';
import * as SystemUi from 'expo-system-ui';

export default function SystemUiScreen() {
  const handleGetColorAsync = async () => {
    const color = await SystemUi.getBackgroundColorAsync();
    console.log(color);
  }

  handleSetColorAsync = async () => {
    await SystemUi.setBackgroundColorAsync('black');
  }

  return (
    <View>
      <Button title="Get Color" onPress={handleGetColorAsync} />
      <Button title="Set Color" onPress={handleSetColorAsync} />
    </View>
  )
}
