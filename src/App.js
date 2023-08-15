import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Otp from "./Pages/Auth/Otp";
import Password from "./Pages/Auth/Password";
import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/Orders";
import Profile from "./Pages/Profile";
import "./assets/styles/index.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/password" element={<Password />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
