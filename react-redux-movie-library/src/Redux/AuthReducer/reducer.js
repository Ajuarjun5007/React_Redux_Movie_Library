// src/Redux/AuthReducer/reducer.js
import { LOGIN_SUCCESS, LOGOUT, AUTH_ERROR } from './actionTypes';

const initialState = {
  isAuth: false,
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        token: null,
      };
    case AUTH_ERROR:
      return {
        ...state,
        isAuth: false,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
