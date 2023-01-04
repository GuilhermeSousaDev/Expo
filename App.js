import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

import Home from './screens/Home';
import ImagePicker from './screens/ImagePicker';
import PinchGesture from './screens/PinchGesture';
import AccelerometerSensor from './screens/Accelerometer';
import Application from './screens/Application';
import AsyncStorage from './screens/AsyncStorage';
import Audio from './screens/Audio';
import AuthSession from './screens/AuthSession';
import BackgroundFetch from './screens/BackgroundFetch';
import BarcodeScanner from './screens/BarcodeScanner';
import Barometer from './screens/Barometer';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='ImagePicker' component={ImagePicker} />
        <Stack.Screen name='PinchGesture' component={PinchGesture} />
        <Stack.Screen name='Accelerometer' component={AccelerometerSensor} />
        <Stack.Screen name='Application' component={Application} />
        <Stack.Screen name='AsyncStorage' component={AsyncStorage} />
        <Stack.Screen name='Audio' component={Audio} />
        <Stack.Screen name='AuthSession' component={AuthSession} />
        <Stack.Screen name='BackgroundFetch' component={BackgroundFetch} />
        <Stack.Screen name='BarcodeScanner' component={BarcodeScanner} />
        <Stack.Screen name='Barometer' component={Barometer} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

