import { View, Text } from 'react-native';
import DatatimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

export default function DatatimeScreen() {
    const [date, setDate] = useState();

    return (
        <View>
            <DatatimePicker 
                value={new Date()} 
                display="spinner"
                minimumDate={new Date(1950, 0, 1)}
                maximumDate={new Date(2030, 10, 20)}
                onChange={(e, newDate) => setDate(newDate)}
            />

            <Text>{ date ? 
                (
                    <>
                       { new Date(date).getFullYear() } |
                       { new Date(date).getMonth()  } |
                       { new Date(date).getDay()  }
                    </>
                )
                : '' 
            }</Text>
        </View>
    )
}