import {rentalsData} from "../data";

// pure functions:
// don't mutate arguments
// don't call any api, no route transition (side effect)
const rentals = (state = [], action) => {
    if(action.type === 'FETCH_RENTALS') {
        return rentalsData;
    } else {
        return state;
    }
}

export default rentals