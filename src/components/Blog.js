import React from "react";
import LikeDislike from "./LikeDislike";
import Comment from "./Comment";
import NavBar from "./NavBar";
import Admin from "../Admin";
import Posts from "./Posts";

const Blog = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  return (
    <div>
      <div><NavBar isLoggedIn={isLoggedIn} /></div>
      <h1>Welcome to the Blog 6.0!</h1>
      {isAdmin ? (
        <Admin />
      ) : (
        <Posts isLoggedIn={isLoggedIn} />

      )}
      <p>Here are your blog posts:</p>
      <ul>
        <li><h2>Blog post 1</h2></li>
        <p>Hi, This is blospost 1. You can only view for now, for more funtionality you need to beAdmin</p>
        <LikeDislike isLoggedIn={isLoggedIn}/>
        <Comment isLoggedIn={isLoggedIn}/>
        <li><h2>Blog post 2</h2></li>
        <p>Hi, This is blospost 2. Just Chill!!</p>
        <LikeDislike isLoggedIn={isLoggedIn}/>
        <Comment isLoggedIn={isLoggedIn}/>
        <li><h2>Blog post 3</h2></li>
        <p>Hi, This is blospost 3. This is just sample post</p>
        <LikeDislike isLoggedIn={isLoggedIn}/>
        <Comment isLoggedIn={isLoggedIn}/>
      </ul>
    </div>
  );
};

export default Blog;
