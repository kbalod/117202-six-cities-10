import MainCityLocation from '../main-city-location/main-city-location';

type CityListType = {
  cities:string[];
}

function MainCityList ({cities}:CityListType) : JSX.Element {
  return(
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => <MainCityLocation key={city} city={city}/>)}
      </ul>
    </section>
  );
}

export default MainCityList;
