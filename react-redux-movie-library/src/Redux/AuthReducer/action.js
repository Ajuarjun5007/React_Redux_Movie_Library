
import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

export const login = (credentials, onSuccess) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8080/login', credentials);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data, 
    });
    onSuccess(); 
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.message,
    });
  
  }
};
