import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';
import { Offers,Offer } from '../../types/offers';

type MapOffers = {
  offers:Offers;
  activePoint: Offer | null;
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

function Map({offers,activePoint,typeMapMain}: MapOffers): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, offers);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            activePoint !== null && offer.id === activePoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });

    }
  }, [map, offers, activePoint]);
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

