import { NameSpace } from '../../const';
import { Offers } from '../../types/offers';
import { State } from '../../types/state';

const getCity = (state: State): string => state[NameSpace.Offers].city;
const getDataLoadedStatus = (state: State): boolean => state[NameSpace.Offers].isDataLoaded;
const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;
const getFavoriteOffers = (state: State): Offers => state[NameSpace.Offers].favoriteOffers;

export {getCity, getDataLoadedStatus, getOffers, getFavoriteOffers};
