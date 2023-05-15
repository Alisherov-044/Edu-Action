import React from "react";

const Links = ({ links }) => {
  return (
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
  );
};

export default Links;
