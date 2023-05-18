import React from "react";

const AboutCard = ({
  image,
  bg = "transparent",
  icon,
  additionalClasses = [],
}) => {
  return (
    <div
      className={`about-card ${additionalClasses.map((cls) => cls)}`}
      style={{ background: bg }}
    >
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
