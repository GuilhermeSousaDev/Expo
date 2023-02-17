import { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const save = async (key, value) => {
    await SecureStore.setItemAsync(key, value);
}

const get = async (key) => {
    const value = await SecureStore.getItemAsync(key);

    if (!value) {
        return null;
    }

    return value;
}

export default function SecureStoreScreen() {
    const [value, setValue] = useState(null);
    const [key, setKey] = useState(null);

    return (
        <View>
            <Text>Secure Store</Text>
            <TextInput placeholder='Key' onChange={e => setKey(e.nativeEvent.text)} />
            <TextInput placeholder='Value' onChange={e => setValue(e.nativeEvent.text)} />
            
            <Button title="Save" onPress={() => save(key, value)} />

            <TextInput 
                placeholder='Get Value' 
                onSubmitEditing={e => console.log(get(e.nativeEvent.text))}
            />
        </View>
    )
}