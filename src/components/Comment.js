import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Comment = ({ isLoggedIn}) => {
  const [comments, setComments] = useState([]);
  const navigator = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLoggedIn) {
      const comment = event.target.comment.value;
      setComments([...comments, comment]);
      event.target.comment.value = '';
    } else {
      navigator('/login');
    }
  };

  return (
    <div>
      <h3>Leave a comment:</h3>
      <form onSubmit={handleSubmit}>
        <textarea name="comment" />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
    </div>
  );
};

export default Comment;
