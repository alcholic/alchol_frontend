import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { 
  Container,
  Icon, 
  Header, 
  Left, 
  Right, 
  Body 
} from 'native-base';

export default class AlarmScreen extends React.Component {
    render() {
      return (
        <Container>
          <Header style={styles.header}>
              <Left>
                <Icon 
                  name='ios-arrow-back' 
                  style={ styles.icon }
                  onPress={ () => this.props.navigation.goBack() }
                />
              </Left>
              <Body>
                <Text style={ styles.text }>알림</Text>
              </Body>
              <Right></Right>
          </Header>
        </Container>
      );
    }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    borderBottomWidth: 0
  },
  icon: {
    paddingLeft: 10
  },
  text: {
    fontSize: 17
  }
});