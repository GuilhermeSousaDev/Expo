import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import ImagePicker from './screens/ImagePicker';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ImagePicker'>
        <Stack.Screen name='ImagePicker' component={ImagePicker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

