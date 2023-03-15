import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

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
      alert("Invalid email or password. Please try again. OR Please Click on Sign-Up");
    }
  };
  
   const handleAdminLogin = () => {
    if (email === 'admin' && password === 'admin') {
      localStorage.setItem('isAdmin', 'true');
      navigate("/admin");
      alert("Admin Login Successful!");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  const MoveToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div>
      <h1>Please Login OR Sign Up first</h1>
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
      <button onClick={handleAdminLogin}>Admin Login</button><br/>   
      <h3>Please Sign Up, if not registered,</h3>
      <button onClick={MoveToSignUp}>Sign Up</button></div>
  );
};

export default Login;
