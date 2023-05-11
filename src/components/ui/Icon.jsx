import React, { forwardRef } from "react";

const Icon = forwardRef(({ svg, additionalClasses = [] }, ref) => (
  <div
    className={`icon ${additionalClasses.map(
      (additionalClass) => additionalClass
    )}`}
    ref={ref}
  >
    {svg}
  </div>
));

export default Icon;
