import { View, Button } from 'react-native';
import * as LocalAuth from 'expo-local-authentication';

export default function LocalAuthScreen() {
    const handleLocalAuth = async () => {
        const auth = await LocalAuth.authenticateAsync();

        if (auth.success) {
            alert('Success Auth');
        }
    }

    return (
        <View>
            <Button title="Auth" onPress={handleLocalAuth} />
        </View>
    )
}