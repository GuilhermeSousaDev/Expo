import { useState } from 'react';
import { Button, View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AsyncStorageScreen() {
    const [data, setData] = useState();

    const obj = {
        name: 'Dyu',
        email: 'Dyu@gmail.com',
        password: 'dyu7621',
    }

    const saveDataInStorage = async () => {
        await AsyncStorage.setItem('person', JSON.stringify(obj));
    }

    const getDataInStorage = async () => {
        const json = await AsyncStorage.getItem('person');

        setData(JSON.parse(json));
    }

    const clearStorage = async () => {
        await AsyncStorage.clear();
        setData({});
    }

    return (
        <View>
            <Text>{ JSON.stringify(obj) }</Text>

            <Button title="Save Json" onPress={saveDataInStorage} />
            <Button title="Get Data" onPress={getDataInStorage} />
            <Button title="Clear Storage" onPress={clearStorage} />

            { data? <Text>{ data.name }-{ data.email }</Text> : '' }
        </View>
    )
}