import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import TabScreen from './Components/AppTabNavigator/TabScreen';
import LoginScreen from './Components/Login/LoginScreen';
import AlarmScreen from './Components/Alarm/AlarmScreen';
import {combineReducers} from "redux";

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { loginReducer } from './Components/Login/LoginReducer'


const RootReducer = combineReducers({
  loginReducer
});
const Store = createStore(RootReducer);
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
      header: null,
    }
  }
});

class App extends Component {
  render() {
    const Layout = createAppContainer(AppStackNavigator);
    return (
        <Provider store={Store}>
          <Layout />
        </Provider>
    );
  }
}

export default App;