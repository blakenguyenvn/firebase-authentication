import React from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native';
import { SwitchNavigator } from 'react-navigation';
import Loading from './views/Loading';
import SignUp from './views/SignUp';
import Login from './views/Login';
import Home from './views/Home';

const App = SwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Home,
  },
  {
    initialRouteName: 'Loading'
  }
)

export default App
