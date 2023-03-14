import React from "react";
import LikeDislike from "./LikeDislike";
import Comment from "./Comment";
import NavBar from "./NavBar";

const Blog = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return (
    <div>
      <div><NavBar isLoggedIn={isLoggedIn} /></div>
      <h1>Welcome to the Blog 6.0!</h1>
      <p>Here are your blog posts:</p>
      <ul>
        <li><h2>Blog post 1</h2></li>
        <p>Hi, This is blospost 1. You can only view for now, for more funtionality you need to beAdmin</p>
        <LikeDislike isLoggedIn={isLoggedIn}/>
        <Comment isLoggedIn={isLoggedIn}/>
        <li><h2>Blog post 2</h2></li>
        <p>Hi, This is blospost 2.Sometimes, a sigle error in you coding can take you whole day, making you life shorter by 1 day, and your productivity, found error which is using useHistory instead of useNavigate</p>
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
