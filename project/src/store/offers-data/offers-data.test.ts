import { OffersData } from '../../types/state';
import { makeFakeCityName, makeFakeOffersData } from '../../utils/mock';
import { fetchFavoritesAction, fetchOffersAction } from '../api-action';
import { changeCity, offersData } from './offers-data';

const offers = makeFakeOffersData();
const city = makeFakeCityName();

describe('Reducer: offers', () => {
  let state: OffersData;

  beforeEach(() => {
    state = {
      city: 'Paris',
      offers: [],
      isDataLoaded: false,
      favoriteOffers: []
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(offersData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });
  it('should is offers data and boolean load data true', () => {
    expect(offersData.reducer(state, {type: fetchOffersAction.fulfilled.type, payload: offers}))
      .toEqual({...state, offers, isDataLoaded: true});
  });
  it('should add favorites offers data', () => {
    expect(offersData.reducer(state, {type: fetchFavoritesAction.fulfilled.type, payload: offers}))
      .toEqual({...state, favoriteOffers: offers});
  });
  it('should change current location data', () => {
    expect(offersData.reducer(state, {type: changeCity.type, payload: city}))
      .toEqual({...state, city});
  });
});
