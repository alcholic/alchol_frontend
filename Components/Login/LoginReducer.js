import {LOGIN} from "./LoginAction";


const initialState = {};

const loginReducer = (state = initialState, action) => {
    const { user } = action;
    switch (action.type) {
        case LOGIN :
            return Object.assign({}, state, {user});
        default :
            return Object.assign({}, state, {});
    }
};

export default loginReducer;
