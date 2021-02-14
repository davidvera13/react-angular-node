import { createStore, combineReducers } from "redux";
import rentals  from "./reducers/rentals";


export function initStore() {
    // PURE Functions
    const reducers = combineReducers({
        rentals: rentals
    });

    const store = createStore(reducers);
    return store
}
