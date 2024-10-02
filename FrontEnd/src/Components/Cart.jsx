import { Link, useNavigate } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { useState, useEffect } from "react";
import axios from "axios";

const BreakfastMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();
  const signToken = localStorage.getItem('token');
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    if (!signToken) {
      navigate('/');
    } else {
      setUserRole(localStorage.getItem('Role'));
    }
  }, [signToken, navigate]);

  const HandleSignout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('Role');
    navigate('/');
  };

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get("http://localhost:8000/");
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <>
      <div className="Navigation flex flex-wrap justify-between items-center m-4 md:m-8">
        <div className="Logo mx-2 md:mx-5">
          <span className="font-bold text-lg text-gray-500"><Link to="/home">Coffee Shop.</Link></span>
        </div>
        <nav className="w-full md:w-auto mt-4 md:mt-0">
          <ul className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-7">
            <li className="font-bold text-gray-500"><Link to="/home">Home</Link></li>
            <li className="font-bold text-gray-500"><Link to="/order">Order</Link></li>
            <li className="font-bold text-gray-500"><Link to="/about">About</Link></li>
            <li className="font-bold text-gray-500"><Link to="/contact">Contact</Link></li>
            {userRole === 'aimefils225@gmail.com' && (
              <li className="font-bold text-gray-500"><Link to="/Admin">Admin</Link></li>
            )}
          </ul>
        </nav>
        <div className="Right flex gap-4 md:gap-10 mt-4 md:mt-0">
          <div className="font-bold">
            <Link to='/Carts' ><RiShoppingCart2Line className="text-2xl text-gray-500" /></Link>
          </div>
          <div className="Account font-bold" >
            <IoMdLogOut onClick={HandleSignout} className="text-2xl text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-2">YOUR ORDERS </h2>
        <p className="text-center text-sm text-gray-600 mb-8">
          Substitute Egg Whites $2.00 | Add Extra Egg $2.00 | Add Pancake $3.00
        </p>
        <div className="w-24 h-1 bg-gray-300 mx-auto mb-4"></div><br /><br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center mb-8">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <div className="w-16 h-0.5 bg-gray-300 mb-2"></div>
              <p className="text-sm text-center text-gray-600 mb-2">{item.description}</p>
              <p className="text-lg font-semibold">${item.price.toFixed(2)}</p> <br /> <br />
              <button className="bg-red-500 text-white w-full p-2 rounded-md hover:bg-red-600">Delete Order</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BreakfastMenu;