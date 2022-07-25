import { Offer, Offers} from '../../types/offers';
import { MainCardHotel } from '../../components/main-card-hotel/main-card-hotel';


type OfferScreenProps = {
  offers:Offers;
  onfocus: (offer:Offer) => void;
}


function MainCardHotelList({offers,onfocus}:OfferScreenProps) : JSX.Element {
  return(
    <>
      {offers.map((offer)=>
        (<MainCardHotel key={offer.id} offer={offer} onMouseEnter={onfocus}/>))}
    </>
  );
}

export {MainCardHotelList};
