import { Button, View } from 'react-native';
import * as FileSystem from 'expo-file-system';

export default function FileSystemScreen() {
    const gifDir = FileSystem.cacheDirectory + 'giphy/';
    const gifFileUri = (gifId) => gifDir + `gif_${gifId}_200.gif`;
    const gifUrl = (gifId) => `https://media1.giphy.com/media/${gifId}/200.gif`;

    async function ensureDirExists() {
        const dirInfo = await FileSystem.getInfoAsync(gifDir);
        if (!dirInfo.exists) {
            console.log("Gif directory doesn't exist, creating...");
            await FileSystem.makeDirectoryAsync(gifDir, { intermediates: true });
        }
    }

    async function getSingleGif(gifId) {
        await ensureDirExists();

        const fileUri = gifFileUri(gifId);
        const fileInfo = await FileSystem.getInfoAsync(fileUri);

        if (!fileInfo.exists) {
            console.log("Gif isn't cached locally. Downloading...");
            await FileSystem.downloadAsync(gifUrl(gifId), fileUri);
        }

        return fileUri;
    }

     async function getGifContentUri(gifId) {
        console.log(await FileSystem.getContentUriAsync(await getSingleGif(gifId)));
    }

     async function deleteAllGifs() {
        console.log('Deleting all GIF files...');
        await FileSystem.deleteAsync(gifDir);
    }

    return (
        <View>
            <Button title="Download Document" onPress={getSingleGif} />
            <Button title="Get Document" onPress={getGifContentUri} />
        </View>
    )
}