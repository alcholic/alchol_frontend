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
          <View style={styles.inviteView}>
            <TouchableOpacity
                style={styles.button}
                onPress={ () => this.props.navigation.goBack() }
            >
              <Text style={styles.inviteText}>모임 초대 요청 4건</Text>
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
      width: width,
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
  inviteView : {
      marginTop: 10,
      height: 35,
      width:width,
      textAlign: 'center',
      alignItems: "center"
  },
  button: {
    alignItems: "center",
    textAlign: 'center',
    backgroundColor: '#ffd939',
    borderRadius: 10,
    width: width - 30,
    flex: 1,
    flexDirection: "row"
  },
  list: {
    flex: 4
  },
  inviteText: {
        width: '100%',
        textAlign: 'center',
        fontWeight: "200",
        fontSize: 15,
        marginVertical: 0,
        color:"#555"
  }
});