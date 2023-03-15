import React, { useState, useEffect } from 'react';
import LikeDislike from "./LikeDislike";
import Comment from "./Comment";

function Posts({isLoggedIn}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from local storage
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <LikeDislike isLoggedIn={isLoggedIn}/>
            <Comment isLoggedIn={isLoggedIn}/>
          </li>
        ))};
      </ul>
    </div>
  );
}

export default Posts;