import { combineReducers } from "redux";

const initAuthReducer = () => {
    const isAuth = (state = false, action) => {
        switch(action.type) {
            default:
                return state;
        }
    }

    const username = (state = '', action) => {
        switch (action.type) {
            default:
                // eslint-disable-next-line
                return state;
        }
    };

    return combineReducers({isAuth, username})
}

const auth = initAuthReducer()
export default auth;
