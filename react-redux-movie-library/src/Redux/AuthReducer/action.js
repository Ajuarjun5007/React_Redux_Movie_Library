import { LOGIN_SUCCESS, LOGOUT, AUTH_ERROR } from './actionTypes';

export const login = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const logout = () => ({
  type: LOGOUT,
});

export const authError = () => ({
  type: AUTH_ERROR,
});
