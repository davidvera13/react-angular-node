import { combineReducers } from "redux";

const initAuthReducer = () => {
    const isAuth = (state = false, action) => {
        switch(action.type) {
            case 'USER_AUTHENTICATED':
                return true;
            case 'USER_DISCONNECTION':
                return false;
            default:
                return state;
        }
    }

    const username = (state = '', action) => {
        switch (action.type) {
            case 'USER_AUTHENTICATED':
                return action.username;
            case 'USER_DISCONNECTION':
                return '';
            default:
                return state;
        }
    };

    return combineReducers({isAuth, username})
}

const auth = initAuthReducer()
export default auth;
