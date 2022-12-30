import { useAuthRequest } from 'expo-auth-session/providers/google';
import WebBrowser from 'expo-web-browser';
import { useEffect } from 'react';
import { View } from 'react-native';

export default function AuthSessionScreen() {
    WebBrowser.maybeCompleteAuthSession();

    const [request, response, promptAsync] = useAuthRequest({
        clientId: '',
        clientSecret: '',
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