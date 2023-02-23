import { View, Text } from 'react-native';
import { useEffect } from 'react';
import * as Linking from 'expo-linking';

export default function StoreReviewScreen() {
  useEffect(() => {
    const androidPackageName = 'host.exp.exponent';

    Linking.openURL(
      `https://play.google.com/store/apps/details?id=${androidPackageName}&showAllReviews=true`
    );

    Linking.openURL(`market://details?id=${androidPackageName}&showAllReviews=true`);
  }, []);

  return (
    <View>
      <Text>Store Review</Text>
    </View>
  )
}
