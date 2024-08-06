// src/Redux/AuthReducer/action.js
import { LOGIN_SUCCESS, LOGOUT, AUTH_ERROR } from './actionTypes';
import axios from 'axios';

export const login = (credentials, redirectTo) => async (dispatch) => {
  try {
    const response = await axios.post('https://reqres.in/api/login', credentials);
    const { token } = response.data;
    dispatch({ type: LOGIN_SUCCESS, payload: token });
    redirectTo();
  } catch (error) {
    dispatch({ type: AUTH_ERROR });
  }
};

export const logout = () => ({ type: LOGOUT });
