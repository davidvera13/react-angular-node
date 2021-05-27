import React from 'react';
import tt from "@tomtom-international/web-sdk-maps";
import axios from "axios";

const { createContext, useContext } = React;

const MapContext = createContext(null);

// (props)
export const MapProvider = ({ children, apiKey }) => {

    const initMap = () => {
        const map = tt.map({
            key: apiKey,
            container: 'map',
            zoom: 15
        });
        map.addControl(new tt.NavigationControl());
        return map;
    }

    const setCenter = (map, position) => {
        map.setCenter(new tt.LngLat(position.lon, position.lat))
    }

    const requestGeolocation = (location) => {
        const url = `https://api.tomtom.com/search/2/geocode/${location.location}.JSON?key=${apiKey}`;
        return axios.get(url)
            .then(res => res.data)
            .then(tomRes => {
                const results = tomRes.results;
                if (results && results.length > 0) {
                    const {position} = results[0]
                    return position;
                }
                return Promise.reject('Location not found');
            });
    }

    const mapApi = {
        initMap, requestGeolocation, setCenter
    }
    return (
        <MapContext.Provider value={mapApi}>
            {children}
        </MapContext.Provider>
    )
}

export const useMap = () => {
    return useContext(MapContext);
}

