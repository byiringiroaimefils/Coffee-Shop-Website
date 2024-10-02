import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:8000/login', { email, password });
      const { token, role } = response.data;
      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('Role', role);
        navigate('/Home');
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      if (error.response) {
       
        setError(error.response.data.message || 'An error occurred during login.');
      } else if (error.request) {
        setError('No response received from server. Please try again later.');
      } else {
        setError('An error occurred. Please try again.');
      }
      console.error('Login error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md">
        <form onSubmit={handleLogin} className="">
          <h2 className='text-3xl text-center'>Log In </h2> <br /><br />
          {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm  mb-2 font-extrabold" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border  w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-extrabold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border  w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='translate-y-[-30px]'>
            Create Account?
            <Link to="SignUp" className="inline-block align-baseline  text-sm text-blue-500">
              Sign Up
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-4   w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;