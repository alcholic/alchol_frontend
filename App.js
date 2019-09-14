import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import MainScreen from './Components/MainScreen';
import LoginScreen from './Components/Login/LoginScreen';
import AlarmScreen from './Components/Alarm/AlarmScreen';

const AppStackNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Main:{
    screen: MainScreen
  },
  Alarm: {
    screen: AlarmScreen
  },
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#ffd939',
    },
    headerTintColor: '#58595B',
  },
});

export default createAppContainer(AppStackNavigator);