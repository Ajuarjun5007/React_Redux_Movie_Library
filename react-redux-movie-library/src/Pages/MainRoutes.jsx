import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LogIn from './LogIn';
import MovieDetail from './MovieDetail';

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LogIn />} />
    <Route path="/movie/:id" element={<MovieDetail />} />
  </Routes>
);

export default MainRoutes;
