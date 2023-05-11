import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/ui/Button";
import logo from "../../assets/images/logo.svg";
import linksData from "../../data/links.json";
import languagesData from "../../data/languages.json";
import { gsap } from "gsap";

const Navbar = () => {
  const [links, setLinks] = useState(linksData);
  const [languages, setLanguages] = useState(languagesData);
  const [selectedLanguage, setSelectedLanguage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const selectionRef = useRef();
  const languagesRef = useRef([]);
  const arrowRef = useRef();

  useEffect(() => {
    setLinks(linksData);
    setLanguages(languagesData);
  }, []);

  const openLanguages = () => {
    const target = languagesRef.current.filter((y) => y !== null);
    const arrowIcon = arrowRef.current;

    if (isOpen) {
      gsap.to(target, {
        duration: 0,
        display: "none",
      });
      gsap.to(arrowIcon, {
        duration: 0.2,
        rotate: "-45deg",
      });

      setIsOpen(false);
    } else {
      gsap.to(target, {
        duration: 0,
        display: "flex",
      });
      gsap.to(arrowIcon, {
        duration: 0.2,
        rotate: "135deg",
      });

      setIsOpen(true);
    }
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__content">
          <div className="img logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
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
        </div>
        <div className="navbar__action">
          <Button text="Ariza qoldirish" additionalClasses={["primary"]} />
          <ul
            className="languages-selection"
            ref={selectionRef}
            onClick={openLanguages}
          >
            <span className="arrow-icon" ref={arrowRef}></span>
            {languages.map(
              (language) =>
                language.id == selectedLanguage && (
                  <li className="language selected" key={language.id}>
                    {language.code}
                  </li>
                )
            )}
            {languages.map(
              (language, index) =>
                language.id !== selectedLanguage && (
                  <li
                    className="language"
                    key={language.id}
                    ref={(x) => (languagesRef.current[index] = x)}
                    onClick={() => setSelectedLanguage(language.id)}
                  >
                    {language.code}
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
