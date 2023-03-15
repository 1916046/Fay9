import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import '../index';

const LikeDislike = ({ isLoggedIn }) => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [hasDisliked, setHasDisliked] = useState(false);
  const navigator = useNavigate();

  const handleLike = () => {
    if (isLoggedIn) {
      if (!hasLiked) {
        setLike(like + 1);
        setHasLiked(true);
        if (hasDisliked) {
          setDislike(dislike - 1);
          setHasDisliked(false);
        }
      } else {
        setLike(like - 1);
        setHasLiked(false);
      }
    } else {
      navigator('/login');
    }
  };

  const handleDislike = () => {
    if (isLoggedIn) {
      if (!hasDisliked) {
        setDislike(dislike + 1);
        setHasDisliked(true);
        if (hasLiked) {
          setLike(like - 1);
          setHasLiked(false);
        }
      } else {
        setDislike(dislike - 1);
        setHasDisliked(false);
      }
    } else {
      navigator('/login');
    }
  };

  return (
    <div className="buttons">
      <Button type="primary" onClick={handleLike}>
        Like ({like})
      </Button>
      <Button type="primary" onClick={handleDislike}>
        Dislike ({dislike})
      </Button>
    </div>
  );
};

export default LikeDislike;