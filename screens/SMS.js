import { View, Button } from 'react-native';
import * as SMS from 'expo-sms';

export default function SmsScreen() {
    const file = require('../assets/favicon.png')

    const handleSendSMS = async () => {
        await SMS.sendSMSAsync(
            [77999234572, 77999774512],
            'Sample Message',
            {
                attachments: {
                    uri: '../assets/favicon.png',
                    mimeType: 'image/png',
                    filename: file,
                }
            }
        );
    }

    return (
        <View>
            <Button title="Send SMS" onPress={handleSendSMS} />
        </View>
    )
}
