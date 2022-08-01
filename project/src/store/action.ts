import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offers';

export const changeCity = createAction<{city: string}>('main/changeCity');

export const offerList = createAction<{offers:Offers}>('main/offerList');
