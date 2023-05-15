import React from "react";

const CommentCard = ({ image, name, specification }) => {
  return (
    <div className="comment-card">
      <div className="img">
        <img src={image} alt={name} />
      </div>
      <div className="content">
        <h5 className="name">{name}</h5>
        <p className="specification">{specification}</p>
      </div>
    </div>
  );
};

export default CommentCard;
