import React, {useEffect} from 'react';
import { useMap } from '../../../providers/map.provider'

import './tomMap.scss';

const TomMap = () => {
    const mapService = useMap();

    useEffect(() => {
        mapService.initMap();

    }, [])

    return <div id="map"> </div>
}

export default TomMap;
