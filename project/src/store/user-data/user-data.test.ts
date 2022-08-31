import { UserLoginData } from '../../types/auth-data';
import { AuthorizationStatus } from '../../types/const';
import { makeFakeUserInfo } from '../../utils/mock';
import { checkAuthAction, loginAction, logoutAction } from '../api-action';
import { userData } from './user-data';

const userInfo = makeFakeUserInfo();

describe('Reducer: user', () => {
  let state: UserLoginData;

  beforeEach(() => {
    state = {authorizationStatus: AuthorizationStatus.Unknown, userInfo: null};
  });

  it('without additional parameters should return initial state', () => {
    expect(userData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({authorizationStatus: AuthorizationStatus.Unknown, userInfo: null});
  });

  it('should update authorizationStatus to Auth, userInfo to user data if checkAuthAction fulfilled', () => {
    expect(userData.reducer(state, {type: checkAuthAction.fulfilled.type, payload: userInfo}))
      .toEqual({authorizationStatus: AuthorizationStatus.Auth, userInfo});
  });
  it('should update null userInfo and NoAuth authorization status checkAuthAction rejected', () => {
    expect(userData.reducer(state, { type: checkAuthAction.rejected.type}))
      .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, userInfo: null});
  });
  it('should update authorizationStatus to auth, userInfo to user data if loginAction fulfilled', () => {
    expect(userData.reducer(state, {type: loginAction.fulfilled.type, payload: userInfo}))
      .toEqual({authorizationStatus: AuthorizationStatus.Auth, userInfo});
  });
  it('should update null userInfo and NoAuth authorization status if logoutAction fulfilled', () => {
    expect(userData.reducer(state, {type: logoutAction.fulfilled.type}))
      .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, userInfo: null});
  });
});
