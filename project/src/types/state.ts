import {store} from '../store/index.js';
import { Comments } from './comments.js';
import { Offer, Offers } from './offers.js';

export type OffersData = {
    city: string;
    offers: Offers;
    isDataLoaded: boolean;
    favoriteOffers: Offers;
  };

export type OfferData = {
    room: Offer | null;
    comments: Comments | null;
    nearby: Offers | null;
  };

export type ErrorsData = {
    authError: boolean,
    offerDataError: boolean,
    offerCommentsError: boolean,
    offerNearbyError: boolean,
    newCommentError: boolean
  };
export type UserData = {
    id: number;
    email: string;
    token: string;
  };

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
