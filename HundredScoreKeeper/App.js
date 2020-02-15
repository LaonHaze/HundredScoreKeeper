import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Main from './components/Main';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Main />
    </NavigationContainer>
  );
}
