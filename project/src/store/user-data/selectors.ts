import { AxiosResponse } from 'axios';
import { NameSpace } from '../../const';
import { AuthorizationStatus } from '../../types/const';
import { State } from '../../types/state';

const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
const getUserInfo = (state: State): AxiosResponse['data'] | null => state[NameSpace.User].userInfo;

export {getAuthorizationStatus, getUserInfo};
