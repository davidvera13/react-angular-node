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
            container: 'map'
        });
        map.addControl(new tt.NavigationControl());
    }

    const requestGeolocation = (location) => {
        const url = `https://api.tomtom.com/search/2/geocode/${location.location}.JSON?key=${apiKey}`;
        return axios.get(url)
            .then(res => res.data);
    }

    const mapApi = {
        initMap, requestGeolocation
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

