import { SET_LOADING, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from './actionTypes';

export const fetchMovies = ({ ratingFilters = [], sortOrder = 'desc' } = {}) => async (dispatch) => {
  dispatch({ type: SET_LOADING });

  try {
    const searchParams = new URLSearchParams();

   
    ratingFilters.forEach(rating => searchParams.append('rating', rating));
    
  
    if (sortOrder) {
      searchParams.set('order', sortOrder);
    }

  
    const url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies?${searchParams.toString()}`;
   

   
    const response = await fetch(url);
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
