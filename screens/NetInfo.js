import { View, Text } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

export default function NetInfoScreen() {

    const unsubscribe = NetInfo.addEventListener(state => {
        console.log('Type: ', state.type);
        console.log('Connection: ', state.isConnected);
        console.log('Details: ', state.details);
        console.log('Wifi: ', state.isWifiEnabled);
    });

    unsubscribe();

    return (
        <View>
            <Text>NetInfo</Text> 
        </View>
    )
}