import { Link, useNavigate } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [orders, setOrders] = useState([]);
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

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/orders");
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const deleteOrder = async (orderId) => {
    try {
      await axios.delete(`http://localhost:8000/orders/${orderId}`);
      setOrders(orders.filter(order => order._id !== orderId));
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const approveOrder = async (orderId) => {
    try {
      await axios.put(`http://localhost:8000/orders/${orderId}/approve`);
      fetchOrders(); // Refresh orders after approval
    } catch (error) {
      console.error("Error approving order:", error);
    }
  };

  const rejectOrder = async (orderId) => {
    try {
      await axios.put(`http://localhost:8000/orders/${orderId}/reject`);
      fetchOrders(); // Refresh orders after rejection
    } catch (error) {
      console.error("Error rejecting order:", error);
    }
  };

  return (
    <>
      <div className="Navigation flex flex-wrap justify-between items-center m-4 md:m-8">
        <div className="Logo mx-2 md:mx-5">
          <span className="font-bold text-lg text-gray-500"><Link to="/home">Coffee Shop.</Link></span>
        </div>
        <nav className="w-full md:w-auto mt-4 md:mt-0">
          <ul className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-7">
            <li className="font-bold text-gray-500"><Link to="/home">HOME</Link></li>
            <li className="font-bold text-gray-500"><Link to="/order">ORDER</Link></li>
            <li className="font-bold text-gray-500"><Link to="/about">ABOUT</Link></li>
            <li className="font-bold text-gray-500"><Link to="/contact">CONTACT </Link></li>
            {userRole === 'admin' && (
              <li className="font-bold text-gray-500"><Link to="/Admin">ADMIN</Link></li>
            )}
          </ul>
        </nav>
        <div className="Right flex gap-4 md:gap-10 mt-4 md:mt-0">
          <div className="font-bold">
            <Link to='/Carts' ><RiShoppingCart2Line className="text-2xl text-gray-500" /></Link>
          </div>
          <div className="font-bold" onClick={HandleSignout}>
            <button className="bg-black text-white  md:w-24 p-2 font-bold rounded-full hover:bg-gray-800">
              <p className='text-sm'>SignOut</p>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-2">
          {userRole === 'admin' ? 'ALL ORDERS' : 'YOUR ORDERS'}
        </h2>
        <div className="w-24 h-1 bg-gray-300 mx-auto mb-4"></div><br /><br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {orders.map((order) => (
            <div key={order._id} className="flex flex-col items-center mb-8 p-4 border rounded-lg shadow-md">
              <p className="text-sm text-center text-gray-600 mb-2">{order.customerEmail}</p>
              <div className="w-16 h-0.5 bg-gray-300 mb-2"></div>
              <div className="w-full mb-4">
                <h4 className="text-lg font-semibold">{order.productName}</h4>
                <p className="text-sm text-gray-600">{order.customerName}</p>
              </div>
              {userRole === 'admin@gmail.com' ? (
                <div className="flex justify-between w-full">
                  <button onClick={() => approveOrder(order._id)} className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 mr-2">Approve</button>
                  <button onClick={() => rejectOrder(order._id)} className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600">Reject</button>
                </div>
              ) : (
                <button onClick={() => deleteOrder(order._id)} className="bg-red-500 text-white w-full p-2 rounded-md hover:bg-red-600">Delete Order</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;