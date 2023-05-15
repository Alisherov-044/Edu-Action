import React from "react";

const Textarea = ({ placeholder, cols = 30, rows = 10 }) => {
  return (
    <div className="text-area">
      <textarea cols={cols} rows={rows} placeholder={placeholder}></textarea>
    </div>
  );
};

export default Textarea;
