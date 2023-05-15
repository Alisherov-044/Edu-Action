import React from "react";
import { Button, AboutCard, Icon, logo } from "../..";

const About = ({ aboutCards }) => {
  return (
    <div className="about__section">
      <h2 className="section__title">
        Biz <span className="to-btn--color">haqimizda</span>
      </h2>
      <div className="content">
        <div className="action">
          <h3 className="title">Edu-action</h3>
          <p className="description">
            Biz xorijda ta’lim olish bo’yicha abuturentlarga ko’maklashuvchi
            kompaniyamiz. Bizning maqsadimiz "Barcha talabalarga ularning kelib
            chiqishi yoki ijtimoiy sharoitlaridan qat'i nazar, mukammal ta'lim
            orqali eng yaxshi imkoniyat beriladi". Biz muntazam ravishda turli
            xorijiy treninglar, ko'rgazmalarda qatnashamiz va butun dunyo
            bo'ylab hamkorlar bilan shartnomalar tuzamiz.
          </p>
          <span>
            <Button text="Batafsil" additionalClasses={["secondary"]} />
          </span>
        </div>
        <div className="cards__wrapper">
          {aboutCards.map((aboutCard) =>
            aboutCard.icon ? (
              aboutCard.icon === "arrow" ? (
                <AboutCard
                  bg={aboutCard.bg}
                  icon={
                    <Icon
                      svg={
                        <svg
                          width="50"
                          height="50"
                          viewBox="0 0 50 50"
                          fill="#fff"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.9082 30.25L34.0947 19.75"
                            stroke="#fff"
                            strokeWidth="2.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M30.7988 32.0442L34.0931 19.75"
                            stroke="#fff"
                            strokeWidth="2.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21.7988 16.457L34.0931 19.7513"
                            stroke="#fff"
                            strokeWidth="2.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      }
                      additionalClasses={["circle lg no-cursor"]}
                    />
                  }
                />
              ) : (
                <AboutCard icon={<img src={logo} alt="logo" />} />
              )
            ) : (
              <AboutCard image={aboutCard.image} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
