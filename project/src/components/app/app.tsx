import {Route, Routes} from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';
import { getAuthorizationStatus } from '../../store/user-data/selectors';
import { getDataLoadedStatus } from '../../store/offers-data/selectors';
import {AppRoute} from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { getOfferDataError } from '../../store/errors-data/selectors';
import ServerError from '../../pages/server-error/server-error';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isDataLoaded = useAppSelector(getDataLoadedStatus);
  const offersDataError = useAppSelector(getOfferDataError);

  if (offersDataError) {
    return (<ServerError />);
  } else if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainScreen/>}
      />
      <Route
        path={AppRoute.Login}
        element={<LoginScreen/>}
      />
      <Route
        path={AppRoute.Room}
        element={<RoomScreen/>}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute
            authorizationStatus={authorizationStatus}
          >
            <FavoritesScreen/>
          </PrivateRoute>
        }
      />
      <Route
        path="*"
        element={<NotFoundScreen />}
      />
    </Routes>

  );
}

export default App;
