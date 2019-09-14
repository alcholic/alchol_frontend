import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import TabScreen from './Components/AppTabNavigator/TabScreen';
import LoginScreen from './Components/Login/LoginScreen';
import AlarmScreen from './Components/Alarm/AlarmScreen';

const AppStackNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  Tab:{
    screen: TabScreen
  },
  Alarm: {
    screen: AlarmScreen,
    navigationOptions: {
      headerTitle: '알림',
      headerTintColor: '#58595B',
      headerStyle: {
        borderBottomWidth: 0,
      }
    },
  }
});

export default createAppContainer(AppStackNavigator);