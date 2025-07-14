import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setTimeout(() => {
      if (email === 'admin@example.com' && password === 'admin123') {
        navigate('/');
      }
    }, 300);
  };

  return (
    <div className="container mt-5 mx-auto w-50">
      <h2 className="text-center">Login</h2>
      <form onSubmit={handleLogin} className="col-md-6 offset-md-3 mt-4">
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@example.com"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="admin123"
          />
        </div>

        {error && <div className="text-danger mb-3">{error}</div>}

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
