import React from "react";
import locationIcon from "../../assets/images/icons/location-icon.svg";

const UniversityCard = ({ image, name, location, specification }) => {
  return (
    <a href="#">
      <div className="university-card">
        <div className="img">
          <img src={image} alt={name} />
        </div>
        <div className="content">
          <h4 className="name">{name}</h4>
          <div className="info__wrapper">
            <p className="location">
              <span className="location-icon">
                <img src={locationIcon} alt="location icon" />
              </span>
              {location}
            </p>
            <p className="specification">{specification}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default UniversityCard;
