import React, { forwardRef } from "react";
import LanguageSelect from "./LanguageSelect";

const LinksModal = forwardRef(({ links, languagesData }, ref) => (
  <div className="links__modal" ref={ref}>
    <div className="container">
      <ul className="navbar__links">
        {links.map((link) => (
          <li
            className={`navbar__link ${link.id == 1 && "active"}`}
            key={link.id}
          >
            <a href={`#${link.slug}`}>{link.value}</a>
          </li>
        ))}
      </ul>
      <LanguageSelect languagesData={languagesData} mobile={true} />
    </div>
  </div>
));

export default LinksModal;
