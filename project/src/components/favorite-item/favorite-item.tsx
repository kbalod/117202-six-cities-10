import { Link } from 'react-router-dom';
import {Offers} from '../../types/offers';
import FavoritePlace from '../favorite-place/favorite-place';

type Favorite = {
    offers:Offers,
    city:string,
   }

function FavoriteItem({offers,city}:Favorite) {
  return(
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to={'/favorites'} className="locations__item-link">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer)=> <FavoritePlace key={offer.id} offer={offer}/>)}
      </div>
    </li>

  );
}

export default FavoriteItem;
