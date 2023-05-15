import React from "react";

const AboutCard = ({ image, bg = "transparent", icon }) => {
  return (
    <div className="about-card" style={{ background: bg }}>
      {image ? (
        <div className="img">
          <img src={image} alt="image" />
        </div>
      ) : (
        icon
      )}
    </div>
  );
};

export default AboutCard;
