import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function PostCard({ post }) {
  const navigate = useNavigate();

  return (
    <div
      className="postCard"
      onClick={() => navigate(`/posts/${post.id}`, { state: post })}
    >
      <h3>{post.title}</h3>

      <p>{post.body}</p>
    </div>
  );
}

export default PostCard;
