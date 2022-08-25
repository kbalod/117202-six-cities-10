import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import { Offer } from '../../types/offers';

type MapOffers = {
  places: Offer[] | undefined;
  selectedPoint: Offer | undefined;
  city: string;
  typeMapMain: boolean;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({places, selectedPoint, city,typeMapMain}: MapOffers): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const layerGroup = L.layerGroup([]);
    if (map) {
      places?.forEach((place) => {
        const marker = new Marker({
          lat: place.location.latitude,
          lng: place.location.longitude,
        });
        marker
          .setIcon(selectedPoint !== undefined && place.id === selectedPoint.id
            ? currentCustomIcon
            : defaultCustomIcon);
        layerGroup
          .addLayer(marker);
      });
      layerGroup
        .addTo(map);
    }
    return () => {
      map?.removeLayer(layerGroup);
    };
  }, [map, places, selectedPoint]);


  if(typeMapMain){
    return (
      <section className="cities__map map" ref={mapRef} >
      </section>
    );
  }
  return (
    <section className="property__map map" ref={mapRef} >
    </section>
  );
}

export default Map;

