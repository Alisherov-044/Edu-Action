import React, { useState } from "react";
import socialNetworks from "../../data/socialNetworks.json";
import logo from "../../assets/images/logo.svg";
import infoData from "../../data/info.json";
import appxSignIcon from "../../assets/images/icons/appx-sign.svg";

const Footer = () => {
  const [socialMedia, setSocialMedia] = useState(socialNetworks);
  const [info, setInfo] = useState(infoData);

  return (
    <footer className="footer">
      <div className="container">
        <div className="img logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="social__networks">
          <p className="text">Ijtimoiy tarmoqlarimiz</p>
          <ul className="social__icons">
            {socialMedia.map((socialNetwork) => (
              <a href={socialNetwork.link} key={socialNetwork.id}>
                <li className="social__icon" key={socialNetwork.id}>
                  <i className={`bi bi-${socialNetwork.slug}`}></i>
                </li>
              </a>
            ))}
          </ul>
        </div>
        <div className="contact">
          <div className="phone">
            <i className="bi bi-telephone"></i>
            <span className="number">{info.phone_number}</span>
          </div>
          <div className="email">
            <i className="bi bi-at"></i>
            <span className="email-address">{info.email}</span>
          </div>
        </div>
        <div className="location">
          <span className="address">{info.address}</span>
          <span className="map">
            <i className="bi bi-geo-alt"></i>
            <p className="description">Xaritada</p>
          </span>
        </div>
        <div className="privicy">
          <div className="img appx-sign">
            <img src={appxSignIcon} alt="appx-sign" />
          </div>
          <p className="description">Developed and designed by Appx Group</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
