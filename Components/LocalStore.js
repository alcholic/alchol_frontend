import {AsyncStorage} from "react-native";


export default class LocalStore {
    static storeData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {}
    };


    static retrieveData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                console.log(value);
                return value;
            }
        } catch (error) {}
    };
}