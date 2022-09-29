import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const favoriteLetter = 'X'

export default function App() {

  console.log(favoriteLetter)

  return (
    <View style={styles.container}>
      <Text>This will auto-refresh! And your favorite letter is now {favoriteLetter}</Text>
      <StatusBar style="auto" />
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
