import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function ContactsScreen() {
    const [contacts, setContacts] = useState();
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [company, setCompany] = useState();


    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();

            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync();

                if (data.length > 0) {
                    setContacts(data[0].phoneNumbers);
                }
            }
        })();
    }, []);

    const createContact = async () => {
        const contact = {
            [Contacts.Fields.Name]: name,
            [Contacts.Fields.LastName]: lastName,
            [Contacts.Fields.Company]: company,
        };

        const contactId = await Contacts.addContactAsync(contact);

        console.log(contactId);
    }

    return (
        <View>
            <Text>Contacts Example</Text>

            <View>
                { contacts ? 
                    contacts.map(contact => (<Text>Number: { contact.number }</Text>)) 
                    : '' 
                }
            </View>

            <TextInput placeholder="Name" onChange={e => setName(e.target.value)} />
            <TextInput placeholder="LastName" onChange={e => setLastName(e.target.value)} />
            <TextInput placeholder="Company" onChange={e => setCompany(e.target.value)} />

            <Button title="Create Contact" onPress={createContact} />
        </View>
    )
}