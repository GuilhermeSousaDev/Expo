import { View, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function DocumentPickerScreen() {
    const handleGetDocumentAsync = async () => {
        const document = await DocumentPicker.getDocumentAsync({
            copyToCacheDirectory: true,
        });

        console.log(document);
    }

    return (
        <View>
            <Button title="Get Documents" onPress={handleGetDocumentAsync} />
        </View>
    )
}