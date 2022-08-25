import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { errorsData} from './errors-data/errors-data';
import { offerData} from './offer-data/offer-data';
import { offersData} from './offers-data/offers-data';
import { userData } from './user-data/user-data';

export const rootReducer = combineReducers ({
  [NameSpace.User]: userData.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.Errors]: errorsData.reducer
});

export type RootState = ReturnType<typeof rootReducer>;
