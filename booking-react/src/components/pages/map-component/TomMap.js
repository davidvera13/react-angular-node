import React, {useEffect} from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import './tomMap.scss';

const TomMap = () => {
    useEffect(() => {
        const map = tt.map({
            key: '7ue0kJMVPHA1YzNjBc3ktsGYYkoZdgMD',
            container: 'map'
        });
        map.addControl(new tt.NavigationControl());
    }, [])

    return <div id="map"> </div>
}

export default TomMap;
