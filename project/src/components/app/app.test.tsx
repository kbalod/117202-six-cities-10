import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import { Provider } from 'react-redux';
import App from './app';
import { AppRoute } from '../../const';
import {makeFakeOfferData, makeFakeOffersData, makeFakeUserData } from '../../utils/mock';
import { Offer } from '../../types/offers';
import { AuthorizationStatus } from '../../types/const';

const mockStore = configureMockStore();

const mockOffers = makeFakeOffersData();
const mockOffer = makeFakeOfferData().room as Offer;
const mockUserData = makeFakeUserData();
mockOffer.city.name = 'Paris';
const history = createMemoryHistory();

describe('Application Routing', () => {
  const store = mockStore({
    USER:
    {
      authorizationStatus: AuthorizationStatus.Auth,
      userInfo: mockUserData,
    },
    OFFERS:
    {
      city: 'Paris',
      offers: [...mockOffers, mockOffer],
      isDataLoaded: true,
      favoriteOffers: mockOffers
    },
    OFFER:
    {
      room: mockOffer,
      comments: [],
      nearby: []
    },
    ERRORS:
    {
      authError: false,
      offerDataError: false,
      offerCommentsError: false,
      offerNearbyError: false
    },
  });

  const fakeApp = (
    <Provider store={store}>
      <HistoryRouter history={history}>
        <App />
      </HistoryRouter>
    </Provider>
  );
  it('should render main page when user navigate to "/"', () => {
    history.push(AppRoute.Main);

    render(fakeApp);

    expect(screen.getByText(/places to stay/i)).toBeInTheDocument();
    expect(screen.getByText(/Cologne/i)).toBeInTheDocument();
    expect(screen.getByText(/Brussels/i)).toBeInTheDocument();
  });

  it('should render favorites page when user navigate to "/favorites"', () => {
    history.push(AppRoute.Favorites);

    render(fakeApp);

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });

  it('should render "NotFoundPage" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('Ошибка 404. Страница не существует.')).toBeInTheDocument();
  });
});
describe('Application Routing no Auth', () => {
  const store = mockStore({
    USER:
    {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userInfo: mockUserData,
    },
    OFFERS:
    {
      city: 'Paris',
      offers: [...mockOffers, mockOffer],
      isDataLoaded: true,
      favoriteOffers: mockOffers
    },
    OFFER:
    {
      room: mockOffer,
      comments: [],
      nearby: []
    },
    ERRORS:
    {
      authError: false,
      offerDataError: false,
      offerCommentsError: false,
      offerNearbyError: false
    },
  });
  const fakeApp = (
    <Provider store={store}>
      <HistoryRouter history={history}>
        <App />
      </HistoryRouter>
    </Provider>
  );
  it('should render login page when user navigate to "/login"', () => {
    history.push(AppRoute.Login);

    render(fakeApp);

    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });
});

