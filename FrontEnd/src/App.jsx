// import React from 'react'
import Home from "./Components/HomePage";
import SignIn from "./Components/Pages/Users/Signin";
import SignUp from "./Components/Pages/Users/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

