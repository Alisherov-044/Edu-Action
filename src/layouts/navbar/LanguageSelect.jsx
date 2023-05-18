import React, { useState, useEffect } from "react";

const LanguageSelect = ({ languagesData, mobile = false }) => {
  const [languages, setLanguages] = useState(languagesData);
  const [selectedLanguage, setSelectedLanguage] = useState(1);
  const [langIsOpen, setLangIsOpen] = useState(false);

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
          setLangIsOpen(false);
        }
      });
    }
  }, [langIsOpen]);

  return (
    <button
      className={`languages-selection ${mobile ? "mobile" : ""} ${
        langIsOpen ? "open" : ""
      }`}
      onClick={() => (langIsOpen ? setLangIsOpen(false) : setLangIsOpen(true))}
    >
      <span className="language"></span>
      {languages.map((language) => (
        <li
          className={`language no-window ${
            language.id === selectedLanguage ? "selected" : ""
          }`}
          key={language.id}
          onClick={() => chooseLanguage(language.id)}
        >
          {language.code}
        </li>
      ))}
    </button>
  );
};

export default LanguageSelect;
