import React from "react";

const Input = ({ type, placeholder }) => {
  return (
    <div className="input">
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
