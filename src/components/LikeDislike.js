import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LikeDislike = ({isLoggedIn}) => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const navigator = useNavigate();

  const handleLike = () => {
    if (isLoggedIn){
      setLike(like + 1);
    }
    else {
      navigator('/login');
    }
    
  };

  const handleDislike = () => {
    if (isLoggedIn){
      setDislike(dislike + 1);
    }
    else {
      navigator('/login');
    }
  };

  return (
    <div>
      <button onClick={handleLike}>Like ({like})</button>
      <button onClick={handleDislike}>Dislike ({dislike})</button>
    </div>
  );
};

export default LikeDislike;
