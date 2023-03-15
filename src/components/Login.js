import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Input, Form } from "antd";
import "../index.css";

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
      alert("Admin login or password is wrong.");
    }
  };

  const MoveToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="login">
      <h1>Please Login OR Sign Up first</h1>
      <Form>
        <Form.Item label="Email">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Password">
          <Input.Password
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleLogin}>
            Login
          </Button><br></br><br></br>
          <Button type="primary" onClick={handleAdminLogin}>Admin Login</Button>
        </Form.Item>
      </Form>
      <h3>Please Sign Up, if not registered,</h3>
      <Button type="primary" onClick={MoveToSignUp}>Sign Up</Button>
    </div>
  );
};

export default Login;