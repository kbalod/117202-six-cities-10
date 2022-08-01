
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';

type CityListType = {
  cities:string[];
}

function MainCityList ({cities}:CityListType) : JSX.Element {
  const dispatch = useAppDispatch();

  function cityChange (currentCity : string) {
    dispatch(changeCity({city:currentCity}));
  }

  return(
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) =>
          (
            <li className="locations__item" key={city} onClick={(()=> cityChange(city))}>
              <Link to={'/'} className="locations__item-link tabs__item">
                <span>{city}</span>
              </Link>
            </li>
          )
        )}
      </ul>
    </section>
  );
}

export default MainCityList;
