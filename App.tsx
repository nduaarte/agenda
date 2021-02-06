import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux'

import { store } from './src/redux';
import HomeScreen from './src/Screens/HomeScreen';

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen/>
      <StatusBar />
    </Provider>
  );
}

