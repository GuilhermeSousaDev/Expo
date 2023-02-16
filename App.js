import 'react-native-gesture-handler';
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
import Fonts from './screens/Fonts';
import Gesture from './screens/Gesture';
import GlView from './screens/GlView';
import Haptics from './screens/Haptics';
import ImageManipulator from './screens/ImageManipulator';
import ImageLibrary from './screens/ImageLibrary';
import KeepAwake from './screens/KeepAwake';
import LinearGradient from './screens/LinearGradient';
import LocalAuth from './screens/LocalAuth';
import Localization from './screens/Localization';
import Location from './screens/Location';
import MailCompose from './screens/MailCompose';
import MapView from './screens/MapView';
import MediaLibrary from './screens/MediaLibrary';
import NavigationBar from './screens/NavigationBar';
import NetInfo from './screens/NetInfo';
import Notifications from './screens/Notifications';
import Pedometer from './screens/Pedometer';
import Print from './screens/Print';
import Reanimated from './screens/Reanimated';
import ScreenCapture from './screens/ScreenCapture';
import ScreenOrientation from './screens/ScreenOrientation';

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
        <Stack.Screen name='Fonts' component={Fonts} />
        <Stack.Screen name='Gesture' component={Gesture} />
        <Stack.Screen name='GlView' component={GlView} />
        <Stack.Screen name='Haptics' component={Haptics} />
        <Stack.Screen name='ImageManipulator' component={ImageManipulator} />
        <Stack.Screen name='ImageLibrary' component={ImageLibrary} />
        <Stack.Screen name='KeepAwake' component={KeepAwake} />
        <Stack.Screen name='LinearGradient' component={LinearGradient} />
        <Stack.Screen name='LocalAuth' component={LocalAuth} />
        <Stack.Screen name='Localization' component={Localization} />
        <Stack.Screen name='Location' component={Location} />  
        <Stack.Screen name='MailCompose' component={MailCompose} />
        <Stack.Screen name='MapView' component={MapView} />
        <Stack.Screen name='MediaLibrary' component={MediaLibrary} />
        <Stack.Screen name='NavigationBar' component={NavigationBar} />
        <Stack.Screen name='NetInfo' component={NetInfo} />
        <Stack.Screen name='Notifications' component={Notifications} />
        <Stack.Screen name='Pedometer' component={Pedometer} />
        <Stack.Screen name='Print' component={Print} />
        <Stack.Screen name='Reanimated' component={Reanimated} />
        <Stack.Screen name='ScreenCapture' component={ScreenCapture} />
        <Stack.Screen name='ScreenOrientation' component={ScreenOrientation} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

