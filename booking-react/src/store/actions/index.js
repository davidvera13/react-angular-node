import { rentalsData } from '../data'

// we define the type and associate payload
export const fetchRentals = () => {
    return {
        type: 'FETCH_RENTALS',
        rentals: rentalsData
    }
}