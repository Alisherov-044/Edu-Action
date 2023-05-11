import React, { forwardRef } from "react";

const Button = forwardRef(({ text, additionalClasses = [] }, ref) => (
  <div
    className={`btn ${additionalClasses.map(
      (additionalClass) => additionalClass
    )}`}
    ref={ref}
  >
    {text}
  </div>
));

export default Button;
