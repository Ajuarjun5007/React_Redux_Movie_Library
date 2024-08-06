
import { LOGIN_SUCCESS, AUTH_ERROR, LOGOUT, LOGIN_FAILURE } from './actionTypes';

const initialState = {
  isAuth: false,
  token: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        token: null,
        error: action.payload.error, 
      };
    case AUTH_ERROR:
      return {
        ...state,
        isAuth: false,
        token: null,
        error: action.payload.error, 
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
