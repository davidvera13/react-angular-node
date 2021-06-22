import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const RentalSearch = () => {
    // states
    const [location, setLocation] = useState('');
    const history = useHistory();

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    const handleSearch = () => {
        location ?
            history.push(`/rentals/${location}/homes`) :
            history.push('/')
    }

    return (
        <div className="form-inline my-2 my-lg-0">
            <input
                onKeyPress={handleKeyPress}
                onChange={event => setLocation(event.target.value)}
                value={location}
                className="form-control mr-sm-2 booking-search"
                type="search"
                placeholder="Search"
                aria-label="Search"
            />
            <button
                onClick={ handleSearch }
                className="btn btn-outline-success my-2 my-sm-0 btn-booking-main"
                type="button">
                Search
            </button>
        </div>
    )
}
export default RentalSearch;
