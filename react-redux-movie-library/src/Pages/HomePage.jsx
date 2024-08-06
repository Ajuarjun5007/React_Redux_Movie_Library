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
          {/* <p> */}
        <a className='HeaderContent'>Home</a>
          {/* </p> */}
       {/* <p> */}
        <a className='HeaderContent'>Login</a>
          {/* </p> */}
       
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
