import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
} from 'react-native';

import Home from './screen/Home';
import Home2 from './screen/Home2';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomHeader from './components/CustomHeader';
import PickNumber from './screen/PickNumber';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: () => <CustomHeader />,
          gestureEnabled: true,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PickNumber" component={PickNumber} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
