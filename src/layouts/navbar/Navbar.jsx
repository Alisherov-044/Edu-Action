import React, { useState } from "react";
import Button from "../../components/ui/Button";
import LanguageSelect from "./LanguageSelect";
import LinksModal from "./LinksModal";
import Links from "./Links";
import logo from "../../assets/images/logo.svg";
import linksData from "../../data/links.json";
import languagesData from "../../data/languages.json";

const Navbar = () => {
  const [links, setLinks] = useState(linksData);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__content">
          <div className="img logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <Links links={links} />
        </div>
        <div className="navbar__action">
          <a href="#contact">
            <Button text="Ariza qoldirish" additionalClasses={["primary"]} />
          </a>
          <LanguageSelect languagesData={languagesData} />
          <div
            className={`burger-menu ${modalIsOpen ? "open" : ""}`}
            onClick={() =>
              modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true)
            }
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>
      <LinksModal
        links={links}
        languagesData={languagesData}
        isOpen={modalIsOpen}
      />
    </div>
  );
};

export default Navbar;
