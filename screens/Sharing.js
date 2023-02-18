import { useState } from 'react';
import { View, Button } from 'react-native';
import * as Sharing from 'expo-sharing';
import * as DocumentPicker from 'expo-document-picker';

export default function SharingScreen() {
    const [file, setFile] = useState();

    const handleChooseFile = async () => {
        const document = await DocumentPicker.getDocumentAsync({
            copyToCacheDirectory: true,
        });

        setFile(document.uri);
    }

    const handleShareFile = async () => {
        await Sharing.shareAsync(file);
    }

    return (
        <View>
            <Button title="Choose File" onPress={handleChooseFile} />
            { file && <Button title="Share File" onPress={handleShareFile} /> }
        </View>
    )
}