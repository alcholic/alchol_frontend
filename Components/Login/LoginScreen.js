import React, { Component } from 'react';
import {StyleSheet, Platform, Dimensions} from 'react-native';
import {
    View,
    Button,
    Text,
    TouchableOpacity,
    TextInput,
    AsyncStorage
} from "react-native";
import LocalStore from '../LocalStore'
import {User} from "./User";
import LoginAction from "./LoginAction";
import {connect} from "react-redux";

const { width, height} = Dimensions.get("window");

class LoginScreen extends Component {
    Login() {
        console.log(this.props.user);
        this.state = {

        }
    }

    componentDidMount() {
        let user = LocalStore.retrieveData("user");
        if(user != null && user.id != null) {
            this.props.navigation.replace('Tab');
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        let user = nextProps.user;
        if(user != null) {
            LocalStore.storeData("user", JSON.stringify(user));
            this.props.navigation.replace('Tab');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                </View>
                <View style={styles.titleContainer}>
                </View>
                <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.faceBookLogin}
                    onPress={() =>
                        new LoginAction().login(this.props.dispatch)
                    }
                >
                    <Text style={styles.fText}>페이스북 로그인 하기</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.kakaoLogin}
                    onPress={() => this.props.navigation.replace('Tab')}
                >
                    <Text style={styles.kText}>카카오톡 로그인 하기</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.naverLogin}
                    onPress={() => this.props.navigation.replace('Tab')}
                >
                    <Text style={styles.fText}>네이버 로그인 하기</Text>
                </TouchableOpacity>
                </View>

                <View style={styles.bottomContainer}></View>

            </View>
        );
    }
}

function select(state) {
    return {
        user: state.loginReducer
    }
}

export default connect(select)(LoginScreen);


const styles = StyleSheet.create({
    container: {
        flex: 4,
        width: width,
        height: height,
        flexDirection: "column",
        alignItems: "center",
        textAlign: 'center',
        justifyContent: "space-between"
    },
    titleContainer: {
        flex: 1,
        flexDirection: "row"
    },
    buttonContainer : {
        flex: 0.9,
        flexDirection: "column",
        textAlign: 'center',
        alignItems: "center",
        width : width
    },
    bottomContainer : {
        flex: 0.5,
        flexDirection: "row"
    },
    faceBookLogin: {
        textAlign: 'center',
        width: '80%',
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
        fontWeight: "200",
        fontSize: 12.5,
        marginVertical: 10,
        backgroundColor: "#3A61B5"
    },
    kakaoLogin: {
        textAlign: 'center',
        width: '80%',
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
        fontWeight: "200",
        fontSize: 12.5,
        marginVertical: 10,
        backgroundColor: "#E7E600"
    },
    naverLogin: {
        textAlign: 'center',
        width: '80%',
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
        fontWeight: "200",
        fontSize: 12.5,
        marginVertical: 10,
        backgroundColor: "#40A940"
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    fText: {
        width: '100%',
        textAlign: 'center',
        fontWeight: "200",
        fontSize: 15,
        marginVertical: 0,
        color:"#fff"
    },
    kText: {
        width: '100%',
        textAlign: 'center',
        fontWeight: "200",
        fontSize: 15,
        marginVertical: 0,
        color:"#555"
    }
});