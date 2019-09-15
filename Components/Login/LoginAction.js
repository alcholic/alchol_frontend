import * as Facebook from "expo-facebook";
import axios from 'axios';
import {User} from "./User";

export const LOGIN = "login";
const loginSet = (user) => ({type : LOGIN, user});
const appId = "510959942798496";
// const appSecret = "3d8b00d03544530d8c195afae15294ff";
export default class LoginAction {

    constructor() {
    }

    async login(dispatch) {
        const {
            type,
            token
        } = await Facebook.logInWithReadPermissionsAsync(appId, {
            permissions: ["public_profile", "email"]
        });
        if (type === "success") {
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            // console.log("Logged in!", `Hi ${(await response.json())}!`);
            const info = (await response.json());
            console.log("info : " + info.name)
            this.loginCall("F", info.id, info.name, info.email)(dispatch);
        }
    }

    loginCall = (snsType, snsId, name, email, profilePath) => (dispatch) => {
        // axios.post('/서버 로그인요청', {
        //     userId : snsId,
        //     snsType : snsType,
        // })
        //     .then(response => {
        //         if(response.data.code === 0) {
        //             dispatch(loginSet(response.data.result.user))
        //         }
        //     })
        //     .catch(err => console.log(err))

        console.log(new User(snsId, name, email, profilePath));
        dispatch(loginSet(new User(snsId, name, email, profilePath)));
    };
}