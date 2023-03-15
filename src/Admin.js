import React, { useState, useEffect } from 'react';
import { Button, Input, Table } from "antd";
import "./index";

function Admin() {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [updatePostId, setUpdatePostId] = useState('');
  const [updatePostTitle, setUpdatePostTitle] = useState('');
  const [updatePostContent, setUpdatePostContent] = useState('');
  const [showUpdateFields, setShowUpdateFields] = useState(false);


  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  const handleCreate = () => 
{
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
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    window.location.href = '/'; 
  }

  return (
    <div className="admin">
      <h1>Admin</h1>
      <Button type="primary" onClick={handleLogout}>Log Out</Button> 
      <h2>Create Post</h2>
      <Input
        placeholder="Title"
        value={newPostTitle}
        onChange={(e) => setNewPostTitle(e.target.value)}
      />
      <Input.TextArea
        placeholder="Content"
        value={newPostContent}
        onChange={(e) => setNewPostContent(e.target.value)}
      />
      <Button type="primary" onClick={handleCreate}>
        Create
      </Button>
      {showUpdateFields && (
        <>
          <h2>Update Post</h2>
          <Input
            placeholder="Title"
            value={updatePostTitle}
            onChange={(e) => setUpdatePostTitle(e.target.value)}
          />
          <Input.TextArea
            placeholder="Content"
            value={updatePostContent}
            onChange={(e) => setUpdatePostContent(e.target.value)}
          />
          <Button type="primary" onClick={handleUpdate}>
            Update
          </Button>
        </>
      )}
      <h2>Posts</h2>
      <Table dataSource={posts} rowKey="id">
        <Table.Column title="Title" dataIndex="title" key="title" />
        <Table.Column title="Content" dataIndex="content" key="content" />
        <Table.Column
          title="Actions"
          key="actions"
          render={(text, record) => (
            <>
              <Button onClick={() => handleEdit(record.id, record.title, record.content)}>
                Edit
              </Button>
              <Button onClick={() => handleDelete(record.id)}>Delete</Button>
            </>
          )}
        />
      </Table>
    </div>
  );
}

export default Admin;
