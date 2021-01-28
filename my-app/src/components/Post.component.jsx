import React from "react";

export default ({ post }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5>{post.title}</h5>
        <p>{post.content}</p>
      </div>
    </div>
  );
};
