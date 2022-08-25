import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';
import { getAuthorizationStatus } from '../../store/user-data/selectors';
import HeaderAuthorized from '../header-authorized/header-authorized';
import HeaderNotAuthorized from '../header-not-authorized/header-not-authorized';
import { AuthorizationStatus } from '../../types/const';

function Header (): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const authorization = authorizationStatus === AuthorizationStatus.NoAuth || authorizationStatus === AuthorizationStatus.Unknown;
  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={'/'} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            {(authorization ?
              <HeaderNotAuthorized/>
              :
              <HeaderAuthorized/>)}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
