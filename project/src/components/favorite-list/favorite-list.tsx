
import { City } from '../../types/const';
import { Offers } from '../../types/offers';
import { getOffersByCity } from '../../utils/utils';
import FavoriteItem from '../favorite-item/favorite-item';

type Favorite = {
  favoriteOffers:Offers;
  cities:City[],
 }

function FavoritesList({favoriteOffers,cities}: Favorite): JSX.Element {
  const offersByCity = getOffersByCity(favoriteOffers);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {cities.map((city) => offersByCity[city.name].length !== 0 ? <FavoriteItem key={city.name} offers={offersByCity[city.name]} city={city.name} /> : '')}
      </ul>
    </section>
  );
}

export default FavoritesList;
