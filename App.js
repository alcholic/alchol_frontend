import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import MainScreen from './Components/MainScreen';
import LoginScreen from './Components/Login/LoginScreen';


const AppStackNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Main:{
    screen: MainScreen
  }
});

export default createAppContainer(AppStackNavigator);