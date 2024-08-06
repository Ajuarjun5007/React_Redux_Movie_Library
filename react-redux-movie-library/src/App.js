// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import MainRoutes from './Pages/MainRoutes';

function App() {
  return (
    <Provider store={store}>
      <MainRoutes />
    </Provider>
  );
}

export default App;
