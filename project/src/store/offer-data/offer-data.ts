import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OfferData } from '../../types/state';
import { fetchNeighbourhoodAction, fetchOfferAction, fetchReviewsAction, postReviewAction } from '../api-action';

const initialState: OfferData = {
  room: null,
  comments: [],
  nearby: []
};

export const offerData = createSlice ({
  name: NameSpace.Offer,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.room = action.payload;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(fetchNeighbourhoodAction.fulfilled, (state, action) => {
        state.nearby = action.payload;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  }
});
