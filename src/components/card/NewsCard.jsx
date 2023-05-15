import React from "react";

const NewsCard = ({ image, title, description }) => {
  return (
    <div className="news__card">
      <div className="img">
        <img src={image} alt={title} />
      </div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
