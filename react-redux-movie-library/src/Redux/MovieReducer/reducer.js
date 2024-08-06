const initialState = {
  isLoading: false,
  isError: false,
  movies: [],
};

console.log("moivedadd",initialState.movies);
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
      };
    case 'FILTER_MOVIES':
      const { ratingFilters } = action.payload;
      return {
        ...state,
        movies: state.movies.filter(movie => ratingFilters.includes(movie.rating)),
      };
    case 'FETCH_MOVIES_FAILURE':
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
