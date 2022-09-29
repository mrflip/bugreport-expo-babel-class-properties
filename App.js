import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const favoriteLetter = 'X'

export default function App() {

  console.log('Your new favorite letter is', favoriteLetter)

  return (
    <View style={styles.container}>
      <Text>Open App.js and change the favoriteLetter variable -- '{favoriteLetter}', currently.</Text>
      <Text>This screen will not auto-refresh, and the console will not share news that your favorite letter is now {favoriteLetter}</Text>
      <Text>Checking out the git branches for BorkedWithBabelClassPropertiesProposal and WorksJustFine</Text>
      <Text>and then running</Text>
      <Text>npm install ; npx expo start --ios --clear</Text>
      <Text>Should make it WorksJustFine or be BorkedWithBabelClassPropertiesProposal</Text>
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
