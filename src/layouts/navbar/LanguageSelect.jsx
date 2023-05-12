import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const LanguageSelect = ({ languagesData, mobile = false }) => {
  // states
  const [languages, setLanguages] = useState(languagesData);
  const [selectedLanguage, setSelectedLanguage] = useState(1);
  const [langIsOpen, setLangIsOpen] = useState(false);
  // refs
  const selectionRef = useRef();
  const languagesRef = useRef([]);
  const arrowRef = useRef();

  // state data from api
  useEffect(() => {
    setLanguages(languagesData);
  }, []);

  // function to open/close language select modal
  const openLanguages = () => {
    const target = languagesRef.current.filter((x) => x !== null);
    const arrowIcon = arrowRef.current;

    if (langIsOpen) {
      gsap.to(target, {
        duration: 0,
        display: "none",
      });
      gsap.to(arrowIcon, {
        duration: 0.2,
        rotate: "-45deg",
      });

      setLangIsOpen(false);
    } else {
      gsap.to(target, {
        duration: 0,
        display: "flex",
      });
      gsap.to(arrowIcon, {
        duration: 0.2,
        rotate: "135deg",
      });

      setLangIsOpen(true);
    }
  };

  // function to change the selected language
  const chooseLanguage = (id) => {
    setSelectedLanguage(id);

    if (langIsOpen) {
      setLangIsOpen(false);
    }
  };

  // close the modal when window is clicked
  useEffect(() => {
    if (langIsOpen) {
      window.addEventListener("click", (event) => {
        if (!event.target.classList.contains("no-window")) {
          openLanguages();
        }
      });
    }
  }, [langIsOpen]);

  return (
    <ul
      className={`languages-selection ${mobile ? "mobile" : ""}`}
      ref={selectionRef}
      onClick={openLanguages}
    >
      <span
        className="arrow-icon no-window"
        ref={arrowRef}
        onClick={openLanguages}
      ></span>
      {languages.map(
        (language) =>
          language.id == selectedLanguage && (
            <li className="language selected no-window" key={language.id}>
              {language.code}
            </li>
          )
      )}
      {languages.map(
        (language, index) =>
          language.id !== selectedLanguage && (
            <li
              className="language no-window"
              key={language.id}
              ref={(x) => (languagesRef.current[index] = x)}
              onClick={() => chooseLanguage(language.id)}
            >
              {language.code}
            </li>
          )
      )}
    </ul>
  );
};

export default LanguageSelect;
