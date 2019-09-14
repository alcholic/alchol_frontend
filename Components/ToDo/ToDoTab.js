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
import uuidv1 from "uuid/v1";

const { height, width } = Dimensions.get("window");

export default class PlayTab extends Component {
    state = {
        newToDo: "",
        loadedToDos: false,
        toDos: {}
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='heart' style={{ color: tintColor }} />
        )
    }

    render() {
        const { newToDo, loadedToDos, toDos }  = this.state;
        console.log(toDos);
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
                        onSubmitEditing={this._addToDo}//완료를 클릭할때의 funciton
                    />
                    <ScrollView contentContainerStyles={styles.toDos}>
                        {Object.values(toDos).map(toDo => 
                        <ToDo 
                            key={toDo.id} 
                            deleteToDo={this._deleteToDo} 
                            uncompleteToDo={this._uncompleteToDo}
                            completeToDo={this._completeToDo}
                            updateToDo={this._updateToDo}
                            {...toDo}
                        />)}
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

    _loadToDos = () => {
        this.setState({
            loadedToDos: true
        });
    };

    _addToDo = () => {
        const { newToDo } = this.state;
        if(newToDo !== "") {
            this.setState(prevState => {
                const ID = uuidv1();
                const newToDoObject = {
                    [ID] : {
                        id: ID,
                        isCompleted: false,
                        text: newToDo,
                        createdAt: Date.now
                    }
                };
                const newState = {
                    ...prevState,
                    newToDo: "",
                    toDos: {
                        ...prevState.toDos,
                        ...newToDoObject
                    }
                }
                return {
                    ...newState
                };
            });
        };
    }

    _deleteToDo = (id) => {
        this.setState(prevState => {
            const toDos = prevState.toDos;
            delete toDos[id];
            const newState = {
                ...prevState,
                ...toDos
            }
            return { ...newState};
        });
    };

    _uncompleteToDo = (id) => {
        this.setState(prevState => {
            const newState = {
                ...prevState,
                toDos: {
                    ...prevState.toDos,
                    [id]: {
                        ...prevState.toDos[id],
                        isCompleted: false
                    }
                }
            };
            return { ...newState };
        });
    }

    _completeToDo = (id) => {
        this.setState(prevState => {
            const newState = {
                ...prevState,
                toDos: {
                    ...prevState.toDos,
                    [id]: {
                        ...prevState.toDos[id],
                        isCompleted: true
                    }
                }
            };
            return { ...newState };
        });
    }
    _updateToDo = (id, text) => {
        this.setState(prevState => {
            const newState = {
                ...prevState,
                toDos: {
                    ...prevState.toDos,
                    [id]: {
                        ...prevState.toDos[id],
                        text: text
                    }
                }
            };
            return { ...newState };
        });
    }
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