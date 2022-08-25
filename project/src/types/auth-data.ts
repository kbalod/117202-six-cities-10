import { AxiosResponse } from 'axios';
import { AuthorizationStatus } from './const';

export type AuthData = {
    login: string;
    password: string;
  };

export type UserLoginData = {
  authorizationStatus: AuthorizationStatus;
  userInfo: AxiosResponse['data'] | null;
}
