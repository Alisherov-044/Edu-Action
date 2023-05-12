import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Button from "../../components/ui/Button";
import LanguageSelect from "./LanguageSelect";
import LinksModal from "./LinksModal";
import logo from "../../assets/images/logo.svg";
import linksData from "../../data/links.json";
import languagesData from "../../data/languages.json";

const Navbar = () => {
  // states
  const [links, setLinks] = useState(linksData);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // refs
  const burgerIconRef = useRef();
  const modalRef = useRef();
  const burgerLinesRef = useRef([]);

  // state data from api
  useEffect(() => {
    setLinks(linksData);
  }, []);

  // function to open/close links modal
  const linksModalHandler = () => {
    const target = modalRef.current;
    const firstLine = burgerLinesRef.current[0];
    const secondLine = burgerLinesRef.current[1];
    const thirdLine = burgerLinesRef.current[2];

    gsap.defaults({ duration: 0.4 });

    if (modalIsOpen) {
      gsap.to(target, {
        duration: 0.25,
        yPercent: 0,
        opacity: 0,
      });

      gsap.to(firstLine, {
        rotate: 0,
        width: `${24 / 16}em`,
        marginLeft: 0,
      });
      gsap.to(secondLine, {
        duration: 0,
        opacity: 1,
        delay: 0.2,
      });
      gsap.to(thirdLine, {
        rotate: 0,
        width: `${24 / 16}em`,
        marginLeft: 0,
      });

      setModalIsOpen(false);
    } else {
      gsap.to(target, {
        duration: 0.5,
        yPercent: 150,
        opacity: 1,
      });

      gsap.to(firstLine, {
        transformOrigin: "left",
        rotate: 45,
        width: `${30 / 16}em`,
        marginLeft: 8,
      });
      gsap.to(secondLine, {
        duration: 0,
        opacity: 0,
      });
      gsap.to(thirdLine, {
        transformOrigin: "left",
        rotate: -45,
        width: `${30 / 16}em`,
        marginLeft: 8,
      });

      setModalIsOpen(true);
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
          <LanguageSelect languagesData={languagesData} />
          <div
            className="burger-menu"
            ref={burgerIconRef}
            onClick={linksModalHandler}
          >
            <span
              className="line"
              ref={(x) => (burgerLinesRef.current[0] = x)}
            ></span>
            <span
              className="line"
              ref={(x) => (burgerLinesRef.current[1] = x)}
            ></span>
            <span
              className="line"
              ref={(x) => (burgerLinesRef.current[2] = x)}
            ></span>
          </div>
        </div>
      </div>
      <LinksModal links={links} languagesData={languagesData} ref={modalRef} />
    </div>
  );
};

export default Navbar;
