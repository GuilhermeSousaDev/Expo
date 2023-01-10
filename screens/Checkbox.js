import { useState } from 'react';
import { View, Text, StyleSheet } from "react-native";
import Checkbox from 'expo-checkbox';

export default function CheckboxScreen() {
    const [checked, setChecked] = useState();

    return (
        <View style={styles.container}>
           <View style={styles.checkboxContainer}>
            <Checkbox
                onValueChange={setChecked}
                value={checked}
                color={checked ? '#4630EB' : undefined}
            />
            <Text>Custom Color Checkbox</Text>
           </View>
           <View style={styles.checkboxContainer}> 
            <Checkbox 
                onValueChange={setChecked}
                value={checked}
                disabled
            />
            <Text>Disabled Checkbox</Text>
           </View>
           <View style={styles.checkboxContainer}>
            <Checkbox 
                onValueChange={setChecked}
                value={checked}
            />
            <Text>Normal Checkbox</Text>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxContainer: {
        flex: 1,  
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});