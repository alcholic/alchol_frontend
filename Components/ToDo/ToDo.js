import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Dimensions, 
    TouchableOpacity, 
    StyleSheet,
    TextInput
} from "react-native";

const { width, heigth} = Dimensions.get("window");

// class(stateful) componenent vs stateless component
// todo 생성 버튼을 누르게 되면, state 모드로 바꿔야함.
export default class ToDo extends Component {
    state = {
        isEditing: false,
        isCompleted: false,
        toDoValue: ""
    }
    render() {
        const { isCompleted, isEditing, toDoValue } = this.state;
        const { text } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.column}>
                    <TouchableOpacity onPress={this._toggleComplete}>
                        <View 
                            style={[
                                styles.circle, 
                                isCompleted ? styles.completedCircle : styles.uncompletedCircle
                            ]} 
                        />
                    </TouchableOpacity>
                    {isEditing ? (
                        <TextInput 
                            style={[
                                styles.text, 
                                styles.input,
                                isCompleted ? styles.completedText : styles.uncompletedText
                            ]} 
                            value={toDoValue} 
                            multiline={true}
                            onChangeText={this._controlInput}
                            returnKeyType={"done"}
                            onBlur={this._finishEditing} // 칸밖을 클릭하면 편집 종료
                         />
                    ) : ( 
                        <Text style={[
                                styles.text,
                                isCompleted ? styles.completedText : styles.uncompletedText
                            ]}>
                        {text}
                        </Text>
                    )}
                </View>
                {isEditing ? (
                    <View style={styles.actions}>
                        <TouchableOpacity onPress={this._finishEditing}>
                            <View style={styles.actionContainer}>
                                <Text style={styles.actionText}>✅</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ): (
                    <View style={styles.actions}>
                        <TouchableOpacity onPress={this._startEditing}>
                            <View style={styles.actionContainer}>
                                <Text style={styles.actionText}>⭕️</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.actionContainer}>
                                <Text style={styles.actionText}>❌</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        );
    }

    _toggleComplete = () => {
        this.setState(prevState => {
            return {
                isCompleted: !prevState.isCompleted
            };
        });
    };

    _startEditing = () => {
        const { text } = this.props;
        this.setState({
            isEditing: true,
            toDoValue: text
        });
    };

    _finishEditing = () => {
        this.setState({
            isEditing: false
        });
    };

    _controlInput = (text) => {
        this.setState({
            toDoValue: text
        })
    }
}

const styles = StyleSheet.create({
    container: {
        width: width-50,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    circle: {
        width:20,
        height:20,
        borderRadius: 15,
        borderWidth: 2,
        marginLeft: 20,
        marginRight: 20
    },
    completedCircle: {
        borderColor: "#bbb",
    },
    uncompletedCircle: {
        borderColor: "#ffd939",
    },
    text: {
        fontWeight: "200",
        fontSize: 15,
        marginVertical: 15
    },
    completedText: {
        color: "#bbb",
        textDecorationLine: "line-through"
    }, 
    uncompletedText: {
        color: "#353839"
    },
    column: {
        flexDirection: "row",
        alignItems: "center",
        width: width / 2,
        justifyContent: "space-between"
    }, 
    actions: {
        flexDirection:"row"
    },
    actionContainer :{
        marginVertical: 10,
        marginHorizontal: 10 
        // 클릭할때 주변을 클릭해도 클릭하게 됨.
    },
    input: {
        width: width / 2,
        marginVertical: 15,
        paddingBottom: 5
    }
});