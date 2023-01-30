import { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { getCalendars, getLocales } from 'expo-localization';

export default function LocalizationScreen() {
    const [locales, setLocales] = useState();

    useEffect(() => setLocales(getLocales()[0]),[]);

    const handleShowCalendars = () => console.log(getCalendars());

    return (
        <View>
            <Button title="Calendars" onPress={handleShowCalendars} />

            <View>
                <Text>Locales</Text>

                <Text>{ locales?.currencySymbol }: { locales?.currencyCode }</Text>
                <Text>Separator: { locales?.decimalSeparator }</Text>
                <Text>Language: { locales?.languageTag }</Text>
            </View>
        </View>
    )
}