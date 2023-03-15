import React from "react";
import LikeDislike from "./LikeDislike";
import Comment from "./Comment";
import { Layout } from 'antd';
import NavBar from "./NavBar";
import Admin from "../Admin";
import Posts from "./Posts";
import "../index.css";



const { Header, Content } = Layout;


const Blog = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  return (
    <Layout>
      <Header><NavBar isLoggedIn={isLoggedIn} /></Header>
      <Content className="blog-content">
      <h1>Welcome to the Blog 6.0!</h1>
      {isAdmin ? (
        <Admin />
      ) : (
        <Posts isLoggedIn={isLoggedIn} />

      )}
         <div className="blog-post">
        <h2>Blog post 1</h2>
        <p>Hi, This is blospost 1. You can only view for now, for more funtionality you need to beAdmin</p>
        <LikeDislike isLoggedIn={isLoggedIn}/>
        <Comment isLoggedIn={isLoggedIn}/>
        </div>
        <div className="blog-post">
        <h2>Blog post 2</h2>
        <p>Hi, This is blospost 2. Just Chill!!</p>
        <LikeDislike isLoggedIn={isLoggedIn}/>
        <Comment isLoggedIn={isLoggedIn}/></div>
        <div className="blog-post">
          <h2>Blog post 3</h2>
        <p>Hi, This is blospost 3. This is just sample post</p>
        <LikeDislike isLoggedIn={isLoggedIn}/>
        <Comment isLoggedIn={isLoggedIn}/></div>
    
      </Content>
      </Layout>
  );
};

export default Blog;
