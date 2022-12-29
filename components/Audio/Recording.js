import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import { Button, View } from "react-native";

export default function RecordingAudio() {
    const [recording, setRecording] = useState();
    const [sound, setSound] = useState();
    const [uri, setUri] = useState();

    const startRecording = async () => {
        try {
            await Audio.requestPermissionsAsync();

            const { recording } = await Audio.Recording
            .createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);

            setRecording(recording);
        } catch (error) {
            console.log(error);
        }
    }

    const stopRecording = async () => {
        setRecording(undefined);

        await recording.stopAndUnloadAsync();

        const uri = recording.getURI();

        setUri(uri);
    }

    const playRecording = async () => {
        const sound = new Audio.Sound();

        setSound(sound);

        await sound.loadAsync({ uri });
            
        await sound.playAsync();
    }

    useEffect(() => {
        return sound ? () => {
            console.log('Unload Async', sound);
            sound.unloadAsync()
        } : undefined;
    }, [sound]);

    return (
        <View>
            <Button 
               title={recording ? 'Stop Recording' : 'Start Recording'}
               onPress={recording ? stopRecording : startRecording} 
            />
            { uri? 
                (<Button 
                    title="Play Recording"
                    onPress={playRecording} 
                 />) 
                : '' 
            }
        </View>
    )
}