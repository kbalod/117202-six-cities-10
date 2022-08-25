import { NameSpace } from '../../const';
import { State } from '../../types/state';

const getAuthError = (state: State): boolean => state[NameSpace.Errors].authError;
const getOfferCommentsError = (state: State): boolean => state[NameSpace.Errors].offerCommentsError;
const getOfferDataError = (state: State): boolean => state[NameSpace.Errors].offerDataError;
const getOfferNearbyError = (state: State): boolean => state[NameSpace.Errors].offerNearbyError;
const getNewCommentError = (state: State): boolean => state[NameSpace.Errors].newCommentError;

export {getAuthError, getOfferCommentsError, getOfferDataError, getOfferNearbyError,getNewCommentError};
