import { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import * as Calendar from 'expo-calendar';

export default function CalendarScreen() {
    useEffect(() => {
        (async () => {
            const { status } = await Calendar.requestCalendarPermissionsAsync();

            if (status === 'granted') {
                const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
                console.log({ calendars });
            }
        })();
    }, []);

    async function getDefaultCalendarSource() {
        const defaultCalendar = await Calendar.getDefaultCalendarAsync();
        return defaultCalendar.source;
      }
      
      async function createCalendar() {
        const defaultCalendarSource =
          Platform.OS === 'ios'
            ? await getDefaultCalendarSource()
            : { isLocalAccount: true, name: 'Expo Calendar' };
        const newCalendarID = await Calendar.createCalendarAsync({
          title: 'Expo Calendar',
          color: 'blue',
          entityType: Calendar.EntityTypes.EVENT,
          sourceId: defaultCalendarSource.id,
          source: defaultCalendarSource,
          name: 'internalCalendarName',
          ownerAccount: 'personal',
          accessLevel: Calendar.CalendarAccessLevel.OWNER,
        });
        console.log(`Your new calendar ID is: ${newCalendarID}`);
      }
      

    return (
        <View>
            <Text>Calendar Module Example</Text>
            <Button title="Create a new calendar" onPress={createCalendar} />
        </View>
    )
}