import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/AuthReducer/action';

const LogIn = ({ location, history }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const token = 'dummy_token';
    dispatch(login(token));
    history.push(location.state?.from || '/');
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LogIn;
