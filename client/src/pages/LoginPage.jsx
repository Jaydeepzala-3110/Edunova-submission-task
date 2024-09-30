import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { apiBaseUrl } from '../utils/api';

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiBaseUrl}/login`, { email, password });
      console.log('Response:', response);
      if (response.status === 200) {
        login(response.data.user);
        navigate('/books');
      } else {
        setError('Invalid credentials, please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block">Email:</label>
          <input
            type="email"
            className="border p-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4 relative">
          <label className="block">Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            className="border p-2 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="absolute right-3 top-9 cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">Login</button>
      </form>
      <p className="mt-4 text-center">
        First time here? <Link to="/register" className="text-blue-500">Sign up</Link>
      </p>
    </div>
  );
};

export default LoginPage;
