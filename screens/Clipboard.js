import { useState } from 'react';
import { View, Text, Button, Alert, TextInput } from "react-native";
import * as Clipboard from 'expo-clipboard';

export default function ClipboardScreen() {
    const [copiedText, setCopiedText] = useState();

    const copyToClipboard = async () => {
        try {
            await Clipboard.setStringAsync('Hello Word from Clipboard');
            Alert.alert('Saved');
        } catch (e) {
            console.log(e);
        }
    }

    const fetchCopiedText = async () => {
        const text = await Clipboard.getStringAsync();
        setCopiedText(text);
    }

    return (
        <View>
            <Button title="Click here to copy to Clipboard" onPress={copyToClipboard} />
            <Button title="View copied text" onPress={fetchCopiedText} />

            <Text>{ copiedText }</Text>
            <TextInput placeholder='Input' />
        </View>
    )
}