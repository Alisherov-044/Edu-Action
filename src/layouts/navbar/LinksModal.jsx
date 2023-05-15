import React from "react";
import LanguageSelect from "./LanguageSelect";
import Links from "./Links";

const LinksModal = ({ links, languagesData, isOpen }) => {
  return (
    <div className={`links__modal ${isOpen ? "open" : ""}`}>
      <div className="container">
        <Links links={links} />
        <LanguageSelect languagesData={languagesData} mobile={true} />
      </div>
    </div>
  );
};

export default LinksModal;
