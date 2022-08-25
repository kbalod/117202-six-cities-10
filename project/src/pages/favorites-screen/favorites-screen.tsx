import { Link } from 'react-router-dom';
import FavoritesEmpty from '../../components/favorite-empty/favorite-empty';
import FavoriteList from '../../components/favorite-list/favorite-list';
import Header from '../../components/header/header';
import { cities} from '../../const';
import { useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/offers-data/selectors';


function FavoritesScreen (){
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  return(
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">

            {favoriteOffers.length ?
              <FavoriteList favoriteOffers={favoriteOffers} cities={cities} />
              :
              <FavoritesEmpty/>}
        </div>
      </main>
      <footer className="footer container">
        <Link to={'/'} className="footer__logo-link"/>
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
