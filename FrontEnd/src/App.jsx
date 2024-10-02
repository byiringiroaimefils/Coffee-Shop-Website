import Home from "./Components/HomePage";
import SignIn from "./Components/Pages/Users/Signin";
import SignUp from "./Components/Pages/Users/Signup";
import Cart from "./Components/Cart";
import Menu from "./Components/Menu";
import Orders from "./Components/order";
import Contact from "./Components/Contac";
import About from "./Components/About";
import Admin from "./Components/Admin";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const signToken = localStorage.getItem('token');

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={signToken ? <Navigate to="/home" /> : <SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={signToken ? <Home /> : <Navigate to="/" />} />
          <Route path="/Carts" element={signToken ? <Cart /> : <Navigate to="/" />} />
          <Route path="/Menu" element={signToken ? <Menu /> : <Navigate to="/" />} />
          <Route path="/orders" element={signToken ? <Orders /> : <Navigate to="/" />} />
          <Route path="/About" element={signToken ? <About /> : <Navigate to="/" />} />
          <Route path="/Contact" element={signToken ? <Contact /> : <Navigate to="/" />} />
          <Route path="/Admin" element={signToken ? <Admin /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
