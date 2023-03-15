import React, { useState, useEffect } from 'react';

function Admin() {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [updatePostId, setUpdatePostId] = useState('');
  const [updatePostTitle, setUpdatePostTitle] = useState('');
  const [updatePostContent, setUpdatePostContent] = useState('');
  const [showUpdateFields, setShowUpdateFields] = useState(false);


  useEffect(() => {
    // Fetch posts from local storage or API
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  const handleCreate = () => {
    // Create new post in local storage or API
    const newPost = {
      id: Date.now(),
      title: newPostTitle,
      content: newPostContent,
    };
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setNewPostTitle('');
    setNewPostContent('');
  };

  const handleEdit = (postId, postTitle, postContent) => {
    setUpdatePostId(postId);
    setUpdatePostTitle(postTitle);
    setUpdatePostContent(postContent);
    setShowUpdateFields(true);

  };

  const handleUpdate = () => {
    // Update post in local storage or API
    const updatedPosts = posts.map(post => {
      if (post.id === updatePostId) {
        return {
          ...post,
          title: updatePostTitle,
          content: updatePostContent,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setUpdatePostId('');
    setUpdatePostTitle('');
    setUpdatePostContent('');
  };

  const handleDelete = (postId) => {
    // Delete post from local storage or API
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    window.location.href = '/'; // Redirect to login page
  }

  return (
    <div>
      <h1>Admin</h1>
      <button onClick={handleLogout}>Log Out</button> {/* Add log out button */}
      <h2>Create Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={newPostTitle}
        onChange={e => setNewPostTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={newPostContent}
        onChange={e => setNewPostContent(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
      {showUpdateFields && (
  <>
    <h2>Update Post</h2>
    <input
      type="text"
      placeholder="Post ID"
      value={updatePostId}
      onChange={e => setUpdatePostId(e.target.value)}
    />
    <input
      type="text"
      placeholder="Title"
      value={updatePostTitle}
      onChange={e => setUpdatePostTitle(e.target.value)}
    />
    <textarea
      placeholder="Content"
      value={updatePostContent}
      onChange={e => setUpdatePostContent(e.target.value)}
    />
    <button onClick={handleUpdate}>Update</button>
  </>
)}
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => handleEdit(post.id, post.title, post.content)}>Edit</button>
      <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
      

    </div>
  );
}

export default Admin;
