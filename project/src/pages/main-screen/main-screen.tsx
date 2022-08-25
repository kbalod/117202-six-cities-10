import MainContentCity from '../../components/main-content-city/main-content-city';
import { CITIES, SortType } from '../../const';
import MainCityList from '../../components/main-city-list/main-city-list';
import Header from '../../components/header/header';
import { useMemo, useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';
import { getCity, getOffers } from '../../store/offers-data/selectors';
import MainEmptyCard from '../../components/main-empty-card/main-empty-card';

function MainScreen() : JSX.Element {
  const [sortType, setSortType] = useState<string>(SortType.Popular);
  const city = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const currentOffers = useMemo(() => offers.filter((offer) => offer.city.name === city), [city, offers]);

  return(
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <MainCityList cities={CITIES}/>
        </div>
        {currentOffers.length ?
          <MainContentCity
            offers={currentOffers}
            sortType={sortType}
            setSortType={setSortType}
            city={city}
          />
          :
          <MainEmptyCard/>}
      </main>
    </div>
  );
}

export default MainScreen;
