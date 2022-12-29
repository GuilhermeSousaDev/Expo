import { useEffect, useState } from 'react';
import { Button, View } from 'react-native';
import { Audio } from 'expo-av';

export default function PlayingAudio() {
    const [sound, setSound] = useState();

    const playSound = async () => {
        const { sound } = await Audio.Sound.createAsync(require('../../assets/AD-Fosforo.mp3'));
        setSound(sound);
        await sound.playAsync();
    }

    useEffect(() => {
        sound ? () => sound.unloadAsync() : undefined;
    }, [sound]);
    
    return (
        <View>
            <Button title="Play Sound" onPress={playSound} />
        </View>
    )
}