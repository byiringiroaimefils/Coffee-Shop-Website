import Home from "./Components/HomePage";
import SignIn from "./Components/Pages/Users/Signin";
import SignUp from "./Components/Pages/Users/Signup";
import Cart from "./Components/Cart";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const signToken = localStorage.getItem('token');
    
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* Redirect to home page if signed in, otherwise go to sign-in */}
          <Route path="/" element={signToken ? <Navigate to="/Home" /> : <SignIn />} />
          
          {/* Protect the home page route, redirect if not signed in */}
          <Route 
            path="/Home" 
            element={signToken ? <Home /> : <Navigate to="/" />} 
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Carts" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
