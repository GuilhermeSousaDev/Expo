import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as Crypto from 'expo-crypto';

export default function CryptoScreen() {
    const [digest, setDigest] = useState();

    useEffect(() => {
        (async () => {
            const digest = await Crypto.digestStringAsync(
                Crypto.CryptoDigestAlgorithm.SHA256,
                'GitHub stars are neat 🌟',
            );

            setDigest(digest);
        })();
    }, []);

    return (
        <View>
            <Text>Expo Crypto Example</Text>
            <Text>Crypto Text: { digest }</Text>
        </View>
    )
}