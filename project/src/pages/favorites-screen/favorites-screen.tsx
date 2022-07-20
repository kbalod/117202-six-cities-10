import FavoriteList from '../../components/favorite-list/favorite-list';
import { Offers } from '../../types/offers';

type OffersType = {
  offers:Offers;
}

function FavoritesScreen ({offers}:OffersType){
  return(
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <link className="header__logo-link" href="main.html"/>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <link className="header__nav-link header__nav-link--profile" href="#"/>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  <span className="header__favorite-count">3</span>
                </li>
                <li className="header__nav-item">
                  <link className="header__nav-link" href="#"/>
                  <span className="header__signout">Sign out</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteList offers={offers} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <link className="footer__logo-link" href="main.html"/>
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
