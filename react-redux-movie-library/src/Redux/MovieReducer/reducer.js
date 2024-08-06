// src/Redux/MovieReducer/reducer.js

const initialState = {
  isLoading: false,
  isError: false,
  movies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVIE_REQUEST':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'MOVIE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
      };
    case 'MOVIE_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default movieReducer;
