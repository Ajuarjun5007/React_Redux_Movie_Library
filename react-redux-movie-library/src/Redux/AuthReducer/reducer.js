// src/Redux/AuthReducer/reducer.js

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_REQUEST':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'AUTH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: action.payload,
      };
    case 'AUTH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'LOGOUT':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default authReducer;
