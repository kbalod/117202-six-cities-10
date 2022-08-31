import { useMemo } from 'react';
import { Offer, Offers} from '../../types/offers';
import { getSortedOffers } from '../../utils/utils';
import CardHotel from '../main-card-hotel/main-card-hotel';


type OfferScreenProps = {
  offers:Offers;
  onMouseEnter?: (offer:Offer) => (void);
  cardHotelType: string;
  sortType: string,
}


function CardHotelList({offers,onMouseEnter,cardHotelType,sortType}:OfferScreenProps) : JSX.Element {
  const sortedPlaces = useMemo(() => getSortedOffers(offers, sortType), [offers, sortType]);
  return(
    <>
      {sortedPlaces.map((offer)=>
        (
          <article key={offer.id} className="cities__card place-card">
            <CardHotel key={offer.id} offer={offer} onMouseEnter={onMouseEnter} cardHotelType={cardHotelType}/>
          </article>))}
    </>
  );
}

export default CardHotelList;
