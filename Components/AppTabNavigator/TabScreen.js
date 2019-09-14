import React, { Component } from 'react';
import { StyleSheet,  Platform} from 'react-native';
import { Icon, Button } from 'native-base';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import HomeTab from './HomeTab'
import FeedTab from './FeedTab'
import PlayTab from './PlayTab'
import MyTab from './MyTab'
import ToDoTab from '../ToDo/ToDoTab'

export default class MainScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
        return {
          headerRight: 
            <Icon 
                name='ios-notifications' 
                color='white'
                style={{ paddingRight:10 }}
                onPress={() => navigation.navigate('Alarm')}
            />,
            headerStyle: {
                backgroundColor: '#ffd939',
                borderBottomWidth: 0
            }
        };
    };
    
    render() {
        return <AppTabContainer/>;
    }
}

// 하단 탭 네비게이터 생성
const AppTabNavigator = createMaterialTopTabNavigator({
    HomeTab: { screen: HomeTab },
    FeedTab: { screen: FeedTab },
    PlayTab: { screen: PlayTab },
    MyTab: { screen: MyTab },
    ToDoTab: { screen: ToDoTab }
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        style: {
        ...Platform.select({
            ios:{
                backgroundColor:'white',
            }
        })
        },
        iconStyle: { height: 100 },
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        upperCaseLabel: false,
        showLabel: false,
        showIcon: true,
    }
});

const AppTabContainer = createAppContainer(AppTabNavigator);