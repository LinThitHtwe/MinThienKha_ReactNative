import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Min Hein Kha </Text>
      </View>
      {Array.from({length: 15}).map((_, index) => (
        <View key={index} style={styles.card}>
          <Text>HELLLLLLO</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },

  card: {
    borderWidth: 1,
    margin: 8,
    height: 70,
    borderRadius: 15,
    borderColor: '#61dafb',
    padding: 10,
    backgroundColor: 'blue',
  },
});
export default App;
