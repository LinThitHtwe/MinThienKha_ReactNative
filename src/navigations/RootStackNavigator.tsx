import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamsList} from './type';
import CustomHeader from '../components/CustomHeader';
import HomeScreen from '../screen/HomeScreen';
import PickNumberScreen from '../screen/PickNumberScreen';

const Stack = createNativeStackNavigator<RootStackParamsList>();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        header: () => <CustomHeader />,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PickNumberScreen" component={PickNumberScreen} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;

const styles = StyleSheet.create({});
