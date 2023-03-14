import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import SignUp from "./SignUp";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const currentUser = users.find(
      (user) => user.email === email && user.password === password
    );
  
    if (currentUser) {
    
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      localStorage.setItem('isLoggedIn', 'true');
      navigate("/blog");
      alert("Login Successful!");
    } else {
      alert("Invalid email or password. Please try again. Please Click on Sign-Up");
    }
  };
  

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <SignUp />
    </div>
  );
};

export default Login;
