import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthReducer/reducer';
import movieReducer from './MovieReducer/reducer';
import {thunk} from 'redux-thunk'; 

const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: movieReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(thunk) 
});

export default store;
