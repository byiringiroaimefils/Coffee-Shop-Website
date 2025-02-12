import { useState, useEffect } from 'react';
import {  useNavigate } from "react-router-dom";



const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });

  const navigate = useNavigate();
  const signToken = localStorage.getItem('token');

  useEffect(() => {
    if (!signToken) {
      navigate('/');
    } 
  }, [signToken, navigate]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ username: '', email: '', message: '' });
  };

  return (
    <>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mx-auto text-center mb-2">CONTACT US</h2>
        <div className="w-24 h-1 bg-gray-300 mx-auto mb-8"></div><br /><br /><br />

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder='User name'
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            />
          </div>

          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            />
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              placeholder='Chat with me'
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;