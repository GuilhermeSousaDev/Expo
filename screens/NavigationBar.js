import { useEffect } from 'react';
import { View, Button } from 'react-native';
import NavigationBar from 'expo-navigation-bar';

export default function NavigationBarScreen() {
    useEffect(() => {
        (async () => {
            const color = await NavigationBar.getBackgroundColorAsync();
            const behavior = await NavigationBar.getBehaviorAsync();
            const border = await NavigationBar.getBorderColorAsync();

            console.log(behavior);
            console.log(color);
            console.log(border);
        })();
    }, []);

    const handleChangeBgColor = async () => {
        NavigationBar.setBackgroundColorAsync('white');
    }

    const handleChangeBehavior = async () => {
        NavigationBar.setBehaviorAsync('overlay-swipe');
    }

    const handleChangeBorderColor = async () => {
        NavigationBar.setBorderColorAsync('red');
    } 


    return (
        <View>
            <Button title="Change Bg Color" onPress={handleChangeBgColor} />
            <Button title="Change Behavior" onPress={handleChangeBehavior} />
            <Button title="Change Border Color" onPress={handleChangeBorderColor} />
        </View>
    )
}