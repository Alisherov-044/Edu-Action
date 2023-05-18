import React, { forwardRef } from "react";

const Button = forwardRef(({ text, additionalClasses = [] }, ref) => (
  <button
    className={`btn ${additionalClasses.map(
      (additionalClass) => additionalClass
    )}`}
    ref={ref}
  >
    {text}
  </button>
));

export default Button;
