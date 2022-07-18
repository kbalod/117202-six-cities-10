import { useState } from 'react';
import { Offers} from '../../types/offers';
import { MainCardHotel } from '../../components/main-card-hotel/main-card-hotel';


type OfferScreenProps = {
  offers:Offers;
}


function MainCardHotelList({offers}:OfferScreenProps) : JSX.Element {
  return(
    <>
      {offers.map((offer)=> <MainCardHotel key={offer.id} offer={offer} />)}
    </>
  );
}

export {MainCardHotelList};
