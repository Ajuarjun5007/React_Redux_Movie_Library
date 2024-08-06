
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../Redux/AuthReducer/action';
import './LogIn.css';

const LogIn = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(state => state.auth.error); 

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      navigate('/');
    } catch (err) {
      setErrorMessage(err.message); 
    }
  };

  return (
    <div className='LoginContainer'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          className='inputContainer'
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
            className='inputContainer'
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <div className='button-container'>
          <button className='button-Item' type="submit">Log In</button>
        </div>
        {error && <div className='error-message'>{error}</div>}
        {errorMessage && <div className='error-message'>{errorMessage}</div>}
      </form>
    </div>
  );
};

export default LogIn;
