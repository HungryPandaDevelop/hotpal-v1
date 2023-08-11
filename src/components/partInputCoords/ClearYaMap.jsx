import { useRef } from 'react';

import { YMaps, Map, ZoomControl } from 'react-yandex-maps';
import { useState, useEffect } from 'react';

import addPlacemark from 'components/partInputCoords/addPlacemark';

const ClearYaMap = ({ currentLocation }) => {



  const myMapRef = useRef(null);

  const [myMap, setMyMap] = useState(null);
  const [loadMap, setLoadMap] = useState(false);
  const [globalPoint, setGlobalPoint] = useState(null);


  const addPosition = (pos) => {

    myMapRef.current.geoObjects.remove(globalPoint);

    const tempPoint = addPlacemark(myMap, myMapRef, pos, 'myMarker', 0);

    setGlobalPoint(tempPoint);
    myMapRef.current.setCenter(currentLocation);
    myMapRef.current.geoObjects.add(tempPoint);

  };

  useEffect(() => {

    if (loadMap && currentLocation) {
      addPosition(currentLocation);
    }
  }, [loadMap, currentLocation]);



  return (
    <div className="user-location-map">
      <YMaps
        query={{ apikey: 'fdb17d90-1d93-4d15-aa02-45c372d5e0f8' }}

      >
        <Map
          id="map"
          width="100%"
          height="100%"
          defaultState={
            {
              center: [55.714247, 37.764375],
              zoom: 10
            }
          }
          modules={["multiRouter.MultiRoute", "Placemark", "geocode"]}
          onLoad={(y) => {
            // myMap.current = y;
            setMyMap(y)
            setLoadMap(true)
            // console.log('ready', y);
          }}
          instanceRef={myMapRef}
        >

          <ZoomControl />
        </Map>
      </YMaps>
    </div>
  )
}

export default ClearYaMap
