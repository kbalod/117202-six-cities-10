
import { useState } from 'react';
import CardHotelList from '../card-hotel-list/card-hotel-list';
import Map from '../map/map';
import SortMainCardList from '../sort-main-card-list/sort-main-card-list';
import { Offers,Offer } from '../../types/offers';

type MainContentType = {
  city:string,
  offers:Offers;
  sortType:string;
  setSortType:(sortType: string) => void;
}
function MainContentCity({offers,sortType,setSortType,city}: MainContentType) : JSX.Element {
  const [selectedPoint,setSelectedPoint] = useState<Offer | undefined>(undefined);

  const handlerOnFocus = (offer:Offer) => {
    setSelectedPoint(offer);
  };

  return(
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers?.length} places to stay in Amsterdam</b>
          <SortMainCardList sortType={sortType} setSortType={setSortType}/>
          <div className="cities__places-list places__list tabs__content">
            <CardHotelList offers={offers} onMouseEnter={handlerOnFocus} cardHotelType={'city'} sortType={sortType}/>
          </div>
        </section>
        <div className="cities__right-section">
          {(offers.length > 0 ? <Map places={offers} selectedPoint={selectedPoint} city={city} typeMapMain/> : '')}
        </div>
      </div>
    </div>
  );
}

export default MainContentCity;
