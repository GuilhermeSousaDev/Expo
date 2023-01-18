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
import Battery from './screens/Battery';
import Brightness from './screens/Brightness';
import Calendar from './screens/Calendar';
import Camera from './screens/Camera';
import CaptureRef from './screens/CaptureRef';
import Checkbox from './screens/Checkbox';
import Clipboard from './screens/Clipboard';
import Contacts from './screens/Contacts';
import Crypto from './screens/Crypto';
import Datatime from './screens/Datatime';
import DocumentPicker from './screens/DocumentPicker';
import FaceDetector from './screens/FaceDetector';
import FileSystem from './screens/FileSystem';
import Firebase from './screens/Firebase';

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
        <Stack.Screen name='Battery' component={Battery} />
        <Stack.Screen name='Brightness' component={Brightness} />
        <Stack.Screen name='Calendar' component={Calendar} />
        <Stack.Screen name='Camera' component={Camera} />
        <Stack.Screen name='CaptureRef' component={CaptureRef} />
        <Stack.Screen name='Checkbox' component={Checkbox} />
        <Stack.Screen name='Clipboard' component={Clipboard} />
        <Stack.Screen name='Contacts' component={Contacts} />
        <Stack.Screen name='Crypto' component={Crypto} />
        <Stack.Screen name='Datatime' component={Datatime} />
        <Stack.Screen name='DocumentPicker' component={DocumentPicker} />
        <Stack.Screen name='FaceDetector' component={FaceDetector} />
        <Stack.Screen name='FileSystem' component={FileSystem} />
        <Stack.Screen name='Firebase' component={Firebase} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

