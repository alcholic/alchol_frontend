import React from 'react';
import { View, Text, Button} from 'react-native';

export default class AlarmScreen extends React.Component {
    render() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>This is a modal!</Text>
          </View>
        );
      }
}