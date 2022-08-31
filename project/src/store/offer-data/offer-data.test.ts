import { OfferData } from '../../types/state';
import { makeFakeOfferData } from '../../utils/mock';
import { fetchNeighbourhoodAction, fetchOfferAction, fetchReviewsAction, postReviewAction } from '../api-action';
import { offerData } from './offer-data';

const offer = makeFakeOfferData();

describe('Reducer: offer', () => {
  let state: OfferData;

  beforeEach(() => {
    state = {
      room: null,
      comments: [],
      nearby: []
    };

  });
  it('without additional parameters should return initial state',() => {
    expect(offerData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });
  it('should get room value', ()=> {
    expect(offerData.reducer(state,{type: fetchOfferAction.fulfilled.type, payload: offer.room}))
      .toEqual({...state, room: offer.room});
  });
  it('should get comments value', ()=> {
    expect(offerData.reducer(state,{type: fetchReviewsAction.fulfilled.type, payload: offer.comments}))
      .toEqual({...state, comments: offer.comments});
  });
  it('should get nearby value', ()=> {
    expect(offerData.reducer(state,{type: fetchNeighbourhoodAction.fulfilled.type, payload: offer.nearby}))
      .toEqual({...state, nearby: offer.nearby});
  });
  it('should get new comments value', ()=> {
    expect(offerData.reducer(state,{type: postReviewAction.fulfilled.type, payload: offer.comments}))
      .toEqual({...state, comments: offer.comments});
  });
});
