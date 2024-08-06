import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';
import './SideBar.css';

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleFilterChange = (rating) => {
    const searchParams = new URLSearchParams(location.search);
    const currentRatings = searchParams.getAll('rating');
    if (currentRatings.includes(rating.toString())) {
      searchParams.delete('rating', rating.toString());
    } else {
      searchParams.append('rating', rating);
    }
    navigate({ search: searchParams.toString() });
  };

  const handleSortChange = (order) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('order', order);
    navigate({ search: searchParams.toString() });
  };

  const renderStars = (count) => {
    return (
      <span className='stars'>
        {Array.from({ length: 5 }, (_, index) => (
          index < count ? <FaStar key={index} className='filledStar' /> : <FaRegStar key={index} className='emptyStar' />
        ))}
      </span>
    );
  };

  return (
    <div className='sideBarContainer'>
      <div className='filterContainer'>
      <h3>Filter by Rating</h3>
      </div>
      <div className='starContainer'>
      {[1, 2, 3, 4, 5].map(rating => (
        <div key={rating} className='ratingRow'>
          <input
            type="checkbox"
            checked={location.search.includes(`rating=${rating}`)}
            onChange={() => handleFilterChange(rating)}
          />
          {renderStars(rating)}
        </div>
      ))}
      </div>
      <div className='sortingContainer'>
      <h3>Sort By Year</h3>
      <div className='sortOptions'>
        <label>
          <input
            type="radio"
            name="sortOrder"
            onClick={() => handleSortChange('asc')}
          />
          Ascending
        </label>
        <label>
          <input
            type="radio"
            name="sortOrder"
            onClick={() => handleSortChange('desc')}
          />
          Descending
        </label>
      </div>
      </div>
    </div>
  );
};

export default SideBar;
