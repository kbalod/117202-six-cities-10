import {createSlice} from '@reduxjs/toolkit';
import { NameSpace} from '../../const';
import {checkAuthAction, loginAction, logoutAction} from '../api-action';
import { AuthorizationStatus } from '../../types/const';
import {UserLoginData } from '../../types/auth-data';

const initialState: UserLoginData = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null
};

export const userData = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userInfo = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userInfo = null;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userInfo = action.payload;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userInfo = null;
      });
  }
});
