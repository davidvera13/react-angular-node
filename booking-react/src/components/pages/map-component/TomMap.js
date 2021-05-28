import React, {useEffect, useCallback, useRef } from 'react';
import { useMap } from '../../../providers/map.provider'

import './tomMap.scss';

const TomMap = (location) => {
    const {initMap, getGeoPosition, setCenter, addMarker, addPopupMessage} = useMap();

    let map = useRef(null);

    const getGeolocation = useCallback((location) => {
        // alert(`Getting ${location.location}`);
        location.location && getGeoPosition(location)
            .then(position => {
                setCenter(map.current, position);
                addMarker(map.current, position);
                console.log("Position");
                console.log(position);
            })
            .catch(error => addPopupMessage(map.current, error));

        console.log(location);
    }, [getGeoPosition, map, setCenter, addMarker, addPopupMessage]);

    useEffect(() => {
        map.current = initMap();

    }, [initMap]);

    useEffect(() => {
        getGeolocation(location)
    }, [location, getGeolocation])

    return <div id="map"> </div>
}

export default TomMap;
