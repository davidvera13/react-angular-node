import React, {useRef} from 'react';
import tt from "@tomtom-international/web-sdk-maps";
import axios from "axios";

const { createContext, useContext } = React;

const MapContext = createContext(null);

// (props)
export const MapProvider = ({ children, apiKey }) => {
    const cache = useRef({});

    const normalizeLocation = (location) => {
        if (location !== undefined && location.location !== undefined) {
            console.log(location);
            return location.location.replace(/\s/g, '').toLowerCase();
        }
    }
    const cacheLocation = (location, position) => {
        const keyLocation = normalizeLocation(location);
        return cache.current[keyLocation] = position
    }

    const getCachedLocation = (location) => {
        const keyLocation = normalizeLocation(location);
        return cache.current[keyLocation]
    }
    const getGeoPosition = (location) => {
        const cachedPosition = getCachedLocation(location);
        return cachedPosition ?
            Promise.resolve(cachedPosition) : requestGeolocation(location)
    }

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

    const addMarker = (map, position) => {
        const markerDiv = document.createElement('div');
        markerDiv.className = "booking-marker";
        new tt.Marker({
            element: markerDiv
        })
            .setLngLat([position.lon, position.lat])
            .addTo(map);
    }

    const addPopupMessage = (map, message) => {
        new tt.Popup({
            className: 'booking-popup',
            closeButton: true,
            closeOnClick: false
        })
            .setLngLat(new tt.LngLat(0,0))
            .setHTML(`<p> ${message} </p>`)
            .addTo(map);
    }

    const requestGeolocation = (location) => {
        // check cache first

        const url = `https://api.tomtom.com/search/2/geocode/${location.location}.JSON?key=${apiKey}`;
        return axios.get(url)
            .then(res => res.data)
            .then(tomRes => {
                const results = tomRes.results;

                if (results && results.length > 0) {
                    const {position} = results[0]
                    // store result into cache - memory variable
                    // { 'address here' : { lat: 0, lon: 12) } }
                    cacheLocation(location.location, position)
                    return position;
                }
                return locationNotFoundError();
            })
            .catch((error) => {
                console.log(error);
                return locationNotFoundError();
            });
    }
    const locationNotFoundError = () => {
        return Promise.reject('Location not found').then();
    }

    const mapApi = {
        initMap, getGeoPosition, setCenter, addMarker, addPopupMessage
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

