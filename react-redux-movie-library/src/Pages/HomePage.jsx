import React from 'react';
import MovieList from '../Components/MovieList';
import { Link } from 'react-router-dom';
import SideBar from '../Components/SideBar';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className='HomePageContainer'>
      <div className='HeaderContainer'>
        <p className='HeaderContentName'>Movie Library</p>
     
          <Link to={'/'}>
        <p className='HeaderContent'>Home</p>
          </Link>
       
       
        <Link to={'/Login'}>
        <p className='HeaderContent'>Login</p>
        </Link>
      
       
      </div>
      <div className='MainContainer'>
        <SideBar />
        <div className='ContentContainer'>
          <MovieList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
