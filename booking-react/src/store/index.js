import { rentalsData } from './data';

const store = {
    rentals: () => {
        return rentalsData;
    },
    data1: () => ['1', '2', '3', '4'],
    data2: () => ['a', 'b', 'c', 'd']
}

export default store;