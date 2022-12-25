import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

import ImagePicker from './screens/ImagePicker';
import PinchGesture from './screens/PinchGesture';
import Home from './screens/Home';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='ImagePicker' component={ImagePicker} />
        <Stack.Screen name='PinchGesture' component={PinchGesture} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

