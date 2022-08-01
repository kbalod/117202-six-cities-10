import MainContentCity from '../../components/main-content-city/main-content-city';
import { CITIES, SortType } from '../../const';
import MainCityList from '../../components/main-city-list/main-city-list';
import Header from '../../components/header/header';
import { getSortedOffers } from '../../utils';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';

function MainScreen() : JSX.Element {
  const [sortType, setSortType] = useState<string>(SortType.Popular);
  const city = useAppSelector((state) => state.city);
  const currentOffers = useAppSelector((state) => state.offers).filter((offer) => offer.city.name === city);
  const sortedOffers = getSortedOffers(currentOffers, sortType);

  return(
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <MainCityList cities={CITIES}/>
        </div>
        <MainContentCity offers={sortedOffers} sortType={sortType} setSortType={setSortType} />
      </main>
    </div>
  );
}

export default MainScreen;
