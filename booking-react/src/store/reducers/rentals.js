// import {rentalsData} from "../data";

// pure functions:
// don't mutate arguments
// don't call any api, no route transition (side effect)
const rentals = (state = [], action) => {
    debugger;
    switch(action.type) {
        case 'FETCH_RENTALS':
            return action.rentals;
        case 'CREATE_RENTAL':
            return [...state, action.rental];
        default:
            return state;
    }
    // if(action.type === 'FETCH_RENTALS') {
    //     return action.rentals;
    // } else if (action.type === 'CREATE_RENTAL') {
    //     // we create a copy of the state
    //     const rentals = [...state];
    //     rentals.push(action.rentaldetails-component);
    //     return [...state, rentals];
    // } else {
    //     return state;
    // }
}

export default rentals
