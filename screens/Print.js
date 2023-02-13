import { View, Button } from 'react-native';
import { printAsync, printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';

const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      Hello Expo!
    </h1>
    <img
      src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
      style="width: 90vw;" />
  </body>
</html>
`;

export default function PrintScreen() {
    const print = async () => {
        await printAsync({ html });
    }

    const printToFile = async () => {
        const { uri } = await printToFileAsync({ html });

        await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
    }

    const printWithMargins = async () => {
        const { uri } = await printToFileAsync({
            html: 'This page is printed with margins',
            margins: {
              left: 20,
              top: 50,
              right: 20,
              bottom: 100,
            },
        });

        await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
    }

    return (
        <View>
            <Button title="Print" onPress={print} />
            <Button title="Print to File" onPress={printToFile} />
            <Button title="Print with Margins" onPress={printWithMargins} />
        </View>
    )
}