import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form, Input, Button } from 'antd';
import '../index';

const { TextArea } = Input;

const Comment = ({ isLoggedIn }) => {
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
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          <TextArea name="comment" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div className="comments">
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
    </div>
  );
};

export default Comment;