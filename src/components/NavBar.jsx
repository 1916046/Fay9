import React from "react";
import { Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import Logout from "./Logout";

const NavBar = ({ isLoggedIn })  => {
  return (
    <Menu mode="horizontal" style={{ width: '100%' }}>
      <Menu.Item key="posts">
      <Button type="primary"><Link to="/">Home</Link></Button>
      </Menu.Item>
      {isLoggedIn ? (
        <Menu.Item key="logout" style={{ float: 'right' }}><Logout /></Menu.Item>
      ) : (
        <>
          <Menu.Item key="login" style={{ float: 'right' }}>
            <Link to="./login"><Button type="primary">Login In</Button></Link></Menu.Item>
          <Menu.Item key="signup" style={{ float: 'right' }}>
          <Link to="./signup"><Button type="primary">Sign Up</Button></Link></Menu.Item>
        </>
      )}
    </Menu>
  );
}

export default NavBar;