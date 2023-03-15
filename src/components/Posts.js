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
      
        {posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <LikeDislike isLoggedIn={isLoggedIn}/>
            <Comment isLoggedIn={isLoggedIn}/></div>
        ))}
    </div>
  );
}

export default Posts;