import { View, Button } from 'react-native';
import * as Speech from 'expo-speech';

export default function SpeechScreen() {
  const speech = () => {
    const wordToSay = 'Say It 1';

    Speech.speak(wordToSay);
  }

  return (
    <View>
      <Button title="Say One" onPress={speech} />
    </View>
  )
}
