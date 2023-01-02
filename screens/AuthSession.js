import { useAuthRequest } from 'expo-auth-session/providers/google';
import WebBrowser from 'expo-web-browser';
import { useEffect } from 'react';
import { View, Button } from 'react-native';
import { secrets } from '../config/secret';

export default function AuthSessionScreen() {
    const [request, response, promptAsync] = useAuthRequest({
        clientId: secrets.clientId, 
        clientSecret: secrets.clientSecret,
    });

    useEffect(() => {
        if (response?.type === 'success') {
          const { authentication } = response;
          console.log(authentication);
        }
      }, [response]);
    
      return (
        <View>
            <Button
                disabled={!request}
                title="Login"
                onPress={() => {
                    promptAsync();
                }}
            />
        </View>
      );
}