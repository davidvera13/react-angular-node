import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import rentals  from './reducers/rentals';
import rental from './reducers/rental';
import auth from './reducers/auth';
// import ReduxThunk from 'redux-thunk'
import thunk from "redux-thunk";


// eslint-disable-next-line
const addPromiseToDispatch = (store) => {
    const { dispatch } = store;

    // check if action is a promise
    return action => {
        if (action.then && typeof action.then === 'function') {
            return action.then(dispatch);
        }
        dispatch(action);
    }
}

export function initStore() {
    // PURE Functions
    const reducers = combineReducers({
        rentals, rental, auth
    });

    // const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

    return store;
}
