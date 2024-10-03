import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const BreakfastMenu = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const signToken = localStorage.getItem('token');
  const email = localStorage.getItem('Role');

  const addToOrder = async (productName) => {
    try {
      const response = await fetch('http://localhost:8000/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerEmail: email,
          customerName: email, 
          productName: productName 
        }),
      });
      const data = await response.json();
      alert('Item added to cart', data); 
      console.log(data);
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  


  useEffect(() => {
    if (!signToken) {
      navigate('/');
    } 
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/products");
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-2"> YOUR  ORDER FAVORITE</h2>
        <div className="w-24 h-1 bg-gray-300 mx-auto mb-4"></div>
        <p className="text-center text-sm text-gray-600 mb-8">
          Substitute $2.00 | Add Extra Egg $2.00 | Add Pancake $3.00
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <div key={item._id} className="flex flex-col items-center mb-8">
              <img src={item.Image} alt={item.Name} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-bold mb-2">{item.Name}</h3>
              <div className="w-16 h-0.5 bg-gray-300 mb-2"></div>
              <p className="text-sm text-center text-gray-600 mb-2">{item.Decription}</p>
              <p className="text-lg font-semibold">${item.Price}</p>
              <button onClick={() => addToOrder(item.Name)} className="mt-4 bg-black text-white w-full p-2 rounded-md hover:bg-gray-800">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BreakfastMenu;