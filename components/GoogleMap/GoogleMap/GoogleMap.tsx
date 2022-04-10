import { FC, useState } from 'react';
import { GoogleMapChild } from 'components';
import GoogleMapReact, {
  ChangeEventValue,
  ClickEventValue,
} from 'google-map-react';

interface Coords {
  lat: number;
  lng: number;
}

interface MapHandlerProps {
  map: any;
  maps: any;
}

interface Bounds {
  ne: Coords;
  nw: Coords;
  se: Coords;
  sw: Coords;
}

const BangkokCoords: Coords = { lat: 13.736717, lng: 100.523186 };

const mapOpt = {
  center: BangkokCoords,
  zoom: 14,
};

export const GoogleMap: FC = (props) => {
  const [bounds, setBounds] = useState<Bounds | null>(null);

  return (
    <GoogleMapReact
      // defaultCenter={BangkokCoords}
      // defaultZoom={14}
      {...mapOpt}
      shouldUnregisterMapOnUnmount
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={mapHandler}
      // layerTypes={['TrafficLayer']}
      // onClick={mapClickHandler}
      // onChange={mapChangeHandler}
      // onDrag={mapDragHandler}
      // onDragEnd={mapDragEndHandler}
      options={{
        // scrollwheel: true,
        // zoomControl: false,
        // scaleControl: true,
        // fullscreenControl: true,
        rotateControl: true,
        mapTypeId: 'roadmap',
        // mapTypeControl: true,
        gestureHandling: 'cooperative',
      }}
      // onTilesLoaded={tilesLoadedHandler}
      {...props}
    >
      {/* <GoogleMapChild lat={BangkokCoords.lat} lng={BangkokCoords.lng} /> */}
    </GoogleMapReact>
  );
};

export default GoogleMap;

const mapHandler = ({ map, maps }: MapHandlerProps) => {
  const marker = new maps.Marker({
    map,
    position: BangkokCoords,
  });

  console.log(maps.places);
  // const service = maps.places.PlacesService(map);
  // console.log(service);

  // const info = new maps.InfoWindow({ content: 'hello' });

  // let showInfo = false;
  // marker.addListener('click', (event: ClickEventValue) => {
  //   if (showInfo) {
  //     info.open({ anchor: marker, map });
  //     map.panTo(BangkokCoords);
  //   } else {
  //     info.close();
  //   }
  //   showInfo = !showInfo;
  // });

  // info.open(map, marker);
};

const mapClickHandler = ({ lat, lng }: ClickEventValue) => {
  console.log(lat);
  console.log(lng);
};

const mapChangeHandler = (event: ChangeEventValue) => {
  console.log(event);
  console.log(event.bounds);
};

const mapDragHandler = (map: any) => {
  console.log('drag');
  console.log(map);
};

const mapDragEndHandler = (map: any) => {
  console.log('drag end');
  const sw = map.getBounds().getSouthWest();
  const ne = map.getBounds().getNorthEast();
  const top = ne.lat();
  const right = ne.lng();
  const bottom = sw.lat();
  const left = sw.lng();
  const { lat, lng } = BangkokCoords;
  if (lat > top || lat < bottom || lng > right || lng < left) {
    map.panTo(BangkokCoords);
  }
};

const tilesLoadedHandler = () => {
  console.log('tiles are loaded');
};
