import { useState } from 'react';
import { Offers} from '../../types/offers';
import { MainCardHotel } from '../../components/main-card-hotel/main-card-hotel';


type OfferScreenProps = {
  offers:Offers;
}


function MainCardHotelList({offers}:OfferScreenProps) : JSX.Element {
  const [activeCard,setActiveCard] = useState(1);

  const handlerOnFocus = (id:number) => {
    setActiveCard(id);
    console.log(activeCard);
  };
  return(
    <>
      {offers.map((offer)=>
        (<MainCardHotel key={offer.id} offer={offer} onMouseEnter={handlerOnFocus}/>))}
    </>
  );
}

export {MainCardHotelList};
