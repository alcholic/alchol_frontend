import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    StatusBar, 
    Dimensions, 
    TextInput,
    Platform
} from 'react-native';

import ToDo from './ToDo';
import { Icon } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get("window");

export default class PlayTab extends Component {
    state = {
        newToDo: ""
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='heart' style={{ color: tintColor }} />
        )
    }

    render() {
        const { newToDo }  = this.state;
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Text style={styles.title}>얼마나 마셨지?</Text>
                <View style={styles.card}>
                    <TextInput 
                        style={styles.input} 
                        placeholder={"알림"} 
                        value={newToDo}
                        onChangeText={this._controlNewToDo}
                        placeholderTextColor={"#999"}
                        returnkeyType={"done"}
                        autoCorrect={false}
                    />
                    <ScrollView contentContainerStyles={styles.toDos}>
                        <ToDo text={"리마가 하이를 초대하였습니다. 수락하시겠습니까?"}/>
                    </ScrollView>
                </View>
            </View>
        );
    }

    _controlNewToDo = text => {
        this.setState({
            newToDo: text
        });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffd939",
        alignItems: 'center'
    },
    title: {
        color: "#58595b",
        fontSize: 20,
        marginTop: 100,
        fontWeight: "200",
        marginBottom: 30,
        textAlign: 'left'
    },
    card: {
        backgroundColor: "white",
        flex: 1,
        width: width-30,
        //borderRadius: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowRadius: 10,
        ...Platform.select({
            ios: {
                shadowColor:"rgb(50, 50, 50)",
                shadowOpacity: 0.5,
                shadowRadius:10,
                shadowOffset:{
                    height:-1,
                    width:0
                }
            },
            android: {
                elevation: 3
            }
        })
    },
    input: {
        padding: 20,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        fontSize: 15,
    },
    toDos: {
        alignItems: "center"
    }
    /*
    * 그림자는 플랫폼마다 구현 방식이 다름
    * shadowRadius: 10
    * elevation: 10
    * 
    */
});