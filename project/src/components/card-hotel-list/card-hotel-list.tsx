import { Offer, Offers} from '../../types/offers';
import CardHotel from '../main-card-hotel/main-card-hotel';


type OfferScreenProps = {
  offers:Offers;
  onMouseEnter?: (offer:Offer) => (void);
  cardHotelType: string;
}


function CardHotelList({offers,onMouseEnter,cardHotelType}:OfferScreenProps) : JSX.Element {
  return(
    <>
      {offers.map((offer)=>
        (
          <article key={offer.id} className="cities__card place-card">
            <CardHotel key={offer.id} offer={offer} onMouseEnter={onMouseEnter} cardHotelType={cardHotelType}/>
          </article>))}
    </>
  );
}

export default CardHotelList;
