
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogIn from './LogIn';
import HomePage from './HomePage';
import MovieDetail from './MovieDetail';

const MainRoutes = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <Routes>
      <Route path="/" element={ <HomePage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/movie/:id" element={ <MovieDetail />} />
    </Routes>
  );
};

export default MainRoutes;
