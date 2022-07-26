import { Link } from 'react-router-dom';
import FavoritePlace from '../favorite-place/favorite-place';
import {CITIES} from '../../const';
import { Offers } from '../../types/offers';

type OfferType = {
  offers:Offers;
 }

function FavoriteList({offers}:OfferType) {
  return(
    <ul className="favorites__list">
      {CITIES.map((city)=> {
        const currentCityOffers = offers.filter((offer)=> offer.city.name === city);
        if(currentCityOffers.length > 0){
          return(
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link to={''} className="locations__item-link" />
                  <span>{city}</span>
                </div>
              </div>
              <div className="favorites__places">
                {currentCityOffers.map((offer)=> <FavoritePlace key={offer.id} offer={offer}/>)}
              </div>
            </li>
          );}
        return '';
      }
      )}
    </ul>
  );
}

export default FavoriteList;
