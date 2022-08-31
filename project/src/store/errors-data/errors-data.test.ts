import { errorsData } from './errors-data';
import {ErrorsData} from '../../types/state';
import { checkAuthAction, fetchNeighbourhoodAction, fetchOfferAction, fetchReviewsAction, postReviewAction } from '../api-action';

describe('Reducer: errors', () => {
  let state: ErrorsData;

  beforeEach(() => {
    state = {
      authError: false,
      offerDataError: false,
      offerCommentsError: false,
      newCommentError: false,
      offerNearbyError: false
    };
  });
  it('without additional parameters should return initial state',() => {
    expect(errorsData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  it('should change authError to true', () => {
    expect(errorsData.reducer(state, {type: checkAuthAction.rejected.type}))
      .toEqual({...state, authError: true});
  });
  it('should change offerDataError to true', () => {
    expect(errorsData.reducer(state, {type: fetchOfferAction.rejected.type}))
      .toEqual({...state, offerDataError: true});
  });
  it('should change offerCommentsError to true', () => {
    expect(errorsData.reducer(state, {type: fetchReviewsAction.rejected.type}))
      .toEqual({...state, offerCommentsError: true});
  });
  it('should change newCommentError to true', () => {
    expect(errorsData.reducer(state, {type: postReviewAction.rejected.type}))
      .toEqual({...state, newCommentError: true});
  });
  it('should change offerNearbyError to true', () => {
    expect(errorsData.reducer(state, {type: fetchNeighbourhoodAction.rejected.type}))
      .toEqual({...state, offerNearbyError: true});
  });
});

