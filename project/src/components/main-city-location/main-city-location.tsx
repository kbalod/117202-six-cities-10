import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';
import { changeCity } from '../../store/offers-data/offers-data';
import { getCity } from '../../store/offers-data/selectors';

type CityListType = {
    city:string;
  }

function MainCityLocation ({city}:CityListType) : JSX.Element {

  const dispatch = useAppDispatch();
  const tappedCity = useAppSelector(getCity);

  return(
    <li className="locations__item" onClick={()=> dispatch(changeCity(city))}>
      <Link to={'/'} className={`locations__item-link tabs__item ${tappedCity === city ? 'tabs__item--active' : ''}`}>
        <span>{city}</span>
      </Link>
    </li>
  );
}
export default MainCityLocation;
