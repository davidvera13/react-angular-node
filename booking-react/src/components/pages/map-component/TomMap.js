import React, {useEffect} from 'react';
import { useMap } from '../../../providers/map.provider'

import './tomMap.scss';

const TomMap = (location) => {
    const {initMap, requestGeolocation} = useMap();

    const getGeolocation = (location) => {
        // alert(`Getting ${location.location}`);
        location.location && requestGeolocation(location).then(response => {
            console.log("results");
            console.log(response);
        });
        console.log(location);
    }

    useEffect(() => {
        initMap();
    }, [initMap]);

    useEffect(() => {
        getGeolocation(location)
    }, [location, getGeolocation])

    return <div id="map"> </div>
}

export default TomMap;
