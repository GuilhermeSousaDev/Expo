import { View, Button } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

export default function MailComposeScreen() {
    const handleSendMail = async () => {
        const mail = await MailComposer.composeAsync({ 
            subject: 'a.guilherme@gmail.com',
            body: 'React Native - Send Mail',
        });

        console.log(mail);
    }

    return (
        <View>
            <Button title="Send Mail" onPress={handleSendMail} />
        </View>
    )
}