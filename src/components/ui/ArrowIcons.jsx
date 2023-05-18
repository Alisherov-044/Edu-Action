import React from "react";
import arrowIcon from "../../assets/images/icons/arrow-icon.svg";

const ArrowIcons = ({ handlerFunction }) => {
  return (
    <div className="arrow-icons__wrapper">
      <div className="icon arrow left">
        <img src={arrowIcon} alt="arrow icon left" />
      </div>
      <div className="icon arrow right">
        <img src={arrowIcon} alt="arrow icon right" />
      </div>
    </div>
  );
};

export default ArrowIcons;
