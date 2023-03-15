import React from "react";
import { Routes, Route } from 'react-router-dom';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Blog from "./components/Blog";
import Admin from "./Admin";

const App = () => {
  return (


<Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Blog />} />
        </Routes>
  )};

export default App;
