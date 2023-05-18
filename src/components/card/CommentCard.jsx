import React from "react";

const CommentCard = ({ image, name, specification, link }) => {
  return (
    <a href={link} className="comment-card arrow-card">
      <div className="img">
        <img src={image} alt={name} />
      </div>
      <div className="content">
        <h5 className="name">{name}</h5>
        <p className="specification">{specification}</p>
      </div>
    </a>
  );
};

export default CommentCard;
