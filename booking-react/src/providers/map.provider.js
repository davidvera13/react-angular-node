import React from 'react';
import tt from "@tomtom-international/web-sdk-maps";
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
    const mapApi = {
        initMap
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

