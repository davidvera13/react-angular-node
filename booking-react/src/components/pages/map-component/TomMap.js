import React, {useEffect, useCallback, useRef } from 'react';
import { useMap } from '../../../providers/map.provider'

import './tomMap.scss';

const TomMap = (location) => {
    const {initMap, requestGeolocation, setCenter } = useMap();
    let map = useRef(null);
    ;

    const getGeolocation = useCallback((location) => {
        // alert(`Getting ${location.location}`);
        location.location && requestGeolocation(location)
            .then(position => {
                setCenter(map.current, position)
                console.log("Position");
                console.log(position);
        });
        console.log(location);
    }, [requestGeolocation, map, setCenter]);

    useEffect(() => {
        map.current = initMap();

    }, [initMap]);

    useEffect(() => {
        getGeolocation(location)
    }, [location, getGeolocation])

    return <div id="map"> </div>
}

export default TomMap;
