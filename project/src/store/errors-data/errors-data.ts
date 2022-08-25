import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ErrorsData } from '../../types/state';
import { checkAuthAction, fetchNeighbourhoodAction, fetchOfferAction, fetchReviewsAction, loginAction, postReviewAction } from '../api-action';

const initialState: ErrorsData = {
  authError: false,
  offerDataError: false,
  offerCommentsError: false,
  offerNearbyError: false,
  newCommentError: false,
};

export const errorsData = createSlice({
  name: NameSpace.Errors,
  initialState,
  reducers: {
    changeOfferDataError: (state, action) => {
      state.offerDataError = action.payload;
    },
    changeNewCommentError: (state,action) => {
      state.offerCommentsError = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.rejected, (state) => {
        state.offerDataError = true;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.offerCommentsError = true;
      })
      .addCase(fetchNeighbourhoodAction.rejected, (state) => {
        state.offerNearbyError = true;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authError = true;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authError = false;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.newCommentError = true;
      });
  }
});

export const {changeOfferDataError,changeNewCommentError} = errorsData.actions;
