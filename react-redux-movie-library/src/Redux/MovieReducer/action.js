// src/Redux/MovieReducer/action.js
import { SET_LOADING,FETCH_MOVIES_SUCCESS,FETCH_MOVIES_FAILURE} from "./actionTypes";
export const fetchMovies = () => async (dispatch) => {
  dispatch({ type: SET_LOADING });

  try {
    const response = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    dispatch({ type: FETCH_MOVIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_MOVIES_FAILURE });
    console.error('Fetch movies error:', error); 
  }
};
