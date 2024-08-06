import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';
import './SideBar.css';

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Handle filtering changes
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

  // Handle sorting changes
  const handleSortChange = (order) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('order', order);
    navigate({ search: searchParams.toString() });
  };

  // Determine if a rating checkbox should be checked
  const isChecked = (rating) => {
    return location.search.includes(`rating=${rating}`);
  };

  // Determine the current sort order
  const currentOrder = new URLSearchParams(location.search).get('order') || '';

  // Render stars for the rating filter
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
              checked={isChecked(rating)}
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
              checked={currentOrder === 'asc'}
              onChange={() => handleSortChange('asc')}
            />
            Ascending
          </label>
          <label>
            <input
              type="radio"
              name="sortOrder"
              checked={currentOrder === 'desc'}
              onChange={() => handleSortChange('desc')}
            />
            Descending
          </label>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
