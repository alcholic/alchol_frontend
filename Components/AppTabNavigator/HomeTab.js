import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Icon } from 'native-base';

const { height } = Dimensions.get("window");

export default class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-home' style={{ color: tintColor }} />
        )
    }
    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
});