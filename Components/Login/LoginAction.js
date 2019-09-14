import * as Facebook from "expo-facebook";

const appId = "510959942798496";
// const appSecret = "3d8b00d03544530d8c195afae15294ff";
export default class LoginAction {

    constructor() {
    }

    async login() {
        const {
            type,
            token
        } = await Facebook.logInWithReadPermissionsAsync(appId, {
            permissions: ["public_profile", "email"]
        });
        if (type === "success") {
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
        }
    }
}