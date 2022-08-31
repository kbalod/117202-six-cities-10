import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchFavoritesAction, fetchOffersAction } from './store/api-action';
import HistoryRouter from './components/history-router/history-router';
import browserHistory from './service/browse-history';

store.dispatch(fetchOffersAction());
store.dispatch(fetchFavoritesAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <HistoryRouter history={browserHistory}>
      <App/>
    </HistoryRouter>
  </Provider>
);
