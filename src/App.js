import React, { useState } from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './userSlice';
import { LOGIN } from './actions';

export default function App() {
  const [username, setUserName] = useState('');
  const dispatch = useDispatch();
  const { isloggedIn, userName } = useSelector((state) => state.user);
  const handleSubmit = () => {
    dispatch(login({ type: LOGIN, username }));
    setUserName('');
  };
  const onChangeHandler = (e) => {
    setUserName(e.target.value);
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      {isloggedIn ? (
        <>
          <p>Welcome User:{userName}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          Login
          <br />
          <input type="text" value={username} onChange={onChangeHandler} />
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </div>
  );
}
