import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';

const number = Platform.select({
  ios: '1',
  android: '2',
});

export default function App() {
  return (
    <View>
      <Text>共通のコンテンツ</Text>
      {Platform.OS === 'ios' && <Text>iOS用のコンテンツ</Text>}
      {Platform.OS === 'android' && <Text>Android用のコンテンツ</Text>}
      {Platform.isPad && <Text>iPad用のコンテンツ</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
