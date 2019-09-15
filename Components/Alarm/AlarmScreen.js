import React from 'react';
import { Text, View, Dimensions, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { 
  Container,
  Icon, 
  Header, 
  Left, 
  Right, 
  Body 
} from 'native-base';

const { height, width } = Dimensions.get("window");

export default class AlarmScreen extends React.Component {
    render() {
      return (
        <Container style={styles.container}>
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
          <View style={ styles.button }>
            <TouchableOpacity
                onPress={ () => this.props.navigation.goBack() }
            >
              <Text>모임 초대 요청 4건</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={ styles.list }>

          </ScrollView>
        </Container>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 5
  },
  header: {
    backgroundColor: "white",
    borderBottomWidth: 0
  },
  icon: {
    paddingLeft: 10
  },
  text: {
    fontSize: 17
  },
  button: {
    flex: 1,
    backgroundColor: '#ffd939',
    borderRadius: 15,
    width: width - 30,
  },
  list: {
    flex: 4
  }
});