import { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function BarcodeScannerScreen() {
    const [status, requestPermission] = BarCodeScanner.usePermissions();
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            await requestPermission();

            setHasPermission(status?.granted);
        })();
    }, []);

    const handleBarcodeScanner = ({ type, data }) => {
        setScanned(true);
        alert(`Barcode with type ${type} and data ${data} has been scanned`);
    }

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <Text>BarCode Scanner</Text>

            <BarCodeScanner 
                onBarCodeScanned={scanned ? undefined : handleBarcodeScanner}
                style={StyleSheet.absoluteFillObject}
            />
            { scanned && <Button title="Tap to Scan Again" onPress={() => setScanned(false)} /> }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});