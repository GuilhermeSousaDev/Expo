import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

import Home from './screens/Home';
import ImagePicker from './screens/ImagePicker';
import PinchGesture from './screens/PinchGesture';
import AccelerometerSensor from './screens/Accelerometer';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='ImagePicker' component={ImagePicker} />
        <Stack.Screen name='PinchGesture' component={PinchGesture} />
        <Stack.Screen name='Accelerometer' component={AccelerometerSensor} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

