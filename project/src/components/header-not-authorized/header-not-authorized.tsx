import { Link } from 'react-router-dom';

function HeaderNotAuthorized (): JSX.Element {
  return(
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={'/'} className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper"/>
          </Link>
          <Link to={'/login'}>
            <span className="header__login">Sign in</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNotAuthorized;
