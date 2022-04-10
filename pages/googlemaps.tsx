import { useEffect } from 'react';
import { NextPage } from 'next';
import { Loader } from '@googlemaps/js-api-loader';

interface addMarkerProps {
  coords: google.maps.LatLng | null;
  map: google.maps.Map;
  google: typeof globalThis.google;
  icon?: string;
  content?: string;
}

export const GoogleMapsPage: NextPage = () => {
  useEffect(() => {
    initMap();
  }, []);

  return <div id='map' style={{ height: '100vh', width: '100%' }}></div>;
};

export default GoogleMapsPage;

async function initMap() {
  const loader = new Loader({ apiKey: '' });
  const google = await loader.load();

  const Bangkok = new google.maps.LatLng(13.736717, 100.523186);
  const map = new google.maps.Map(
    document.getElementById('map') as HTMLElement,
    {
      center: Bangkok,
      zoom: 8,
    }
  );

  const iconUrl =
    'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

  const markers = [
    { coords: Bangkok, map, google, icon: iconUrl },
    {
      coords: new google.maps.LatLng(14.35167, 100.57739),
      map,
      google,
      icon: iconUrl,
      content: '<h1>Ayuthaya</h1>',
    },
  ];

  markers.forEach((marker) => {
    addMarker(marker);
  });

  google.maps.event.addListener(
    map,
    'click',
    (event: google.maps.MapMouseEvent) => {
      addMarker({ coords: event.latLng, map, google });
    }
  );
}

function addMarker({ coords, map, google, icon, content }: addMarkerProps) {
  const marker = new google.maps.Marker({
    position: coords,
    ...(icon && { icon }),
    ...(content && { content }),
  });

  marker.setMap(map);

  if (content) {
    const infoWindow = new google.maps.InfoWindow({ content });
    marker.addListener('click', () => infoWindow.open(map, marker));
  }
}
