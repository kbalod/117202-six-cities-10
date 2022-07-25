
import { useState } from 'react';
import { Offers,Offer } from '../../types/offers';
import { MainCardHotelList } from '../main-card-hotel-list/main-card-hotel-list';
import Map from '../map/map';

type MainContentType = {
  offers:Offers;
}
function MainContentCity({offers}: MainContentType) : JSX.Element {
  const [activePoint,setActivePoint] = useState<Offer | null>(null);

  const handlerOnFocus = (offer:Offer) => {
    setActivePoint(offer);
  };

  return(
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
          Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            <MainCardHotelList offers={offers} onfocus={handlerOnFocus}/>
          </div>
        </section>
        <div className="cities__right-section">
          <Map offers={offers} activePoint={activePoint} />
        </div>
      </div>
    </div>
  );
}

export default MainContentCity;
