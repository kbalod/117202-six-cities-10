import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';
import { logoutAction } from '../../store/api-action';
import { getFavoriteOffers } from '../../store/offers-data/selectors';
import { getUserInfo } from '../../store/user-data/selectors';

function HeaderAuthorized (): JSX.Element {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(getUserInfo);
  const favoriteOffersCount = useAppSelector(getFavoriteOffers).length;
  return(
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link to={'/favorites'} className="header__nav-link header__nav-link--profile">
          <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${userInfo?.avatarUrl})`}}>
          </div>
          <span className="header__user-name user__name">{userInfo.email}</span>
          <span className="header__favorite-count">{favoriteOffersCount}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link to={'/'}
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
          className="header__nav-link"
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ul>
  );
}

export default HeaderAuthorized;
