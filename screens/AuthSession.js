import { useAuthRequest } from 'expo-auth-session/providers/google';
import WebBrowser from 'expo-web-browser';
import { useEffect } from 'react';
import { View } from 'react-native';

export default function AuthSessionScreen() {
    WebBrowser.maybeCompleteAuthSession();

    const [request, response, promptAsync] = useAuthRequest({
        clientId: '1032763725233-a8d81j580ac2usa78lf3glue02l4pij4.apps.googleusercontent.com',
        clientSecret: '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',
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