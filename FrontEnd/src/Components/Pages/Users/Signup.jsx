import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const signUp = { username, email, password };
    console.log(signUp);
    axios.post('http://localhost:8000/signup', signUp)
      .then((response) => {
        console.log('User registered', response);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="">
          <h2 className='text-3xl text-center'>Sign Up </h2> <br /><br />
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-extrabold mb-2" htmlFor="username">
              User Name
            </label>
            <input
              className="shadow appearance-none border  w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"  
              required
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-extrabold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border  w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              required
              onChange={(event) => setEmail(event.target.value)}
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
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className='translate-y-[-30px]'>
            Already have Account?
            <Link to="/" className="inline-block align-baseline  text-sm text-blue-500">
              Login
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-4  w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}