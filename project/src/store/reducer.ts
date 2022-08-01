import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../components/mocks/offers';
import { Offers } from '../types/offers';
import { getOffersByCity } from '../utils';
import { changeCity, offerList } from './action';

type initialStateType = {
 city:string;
 offers:Offers;
}

const initialState : initialStateType = {
  city: 'Paris',
  offers:offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state,action) => {
      state.city = action.payload.city;
    });
  builder
    .addCase(offerList, (state) => {
      state.offers = getOffersByCity(offers,state.city);
    });
});

export {reducer};
