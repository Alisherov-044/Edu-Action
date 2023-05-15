import React, { useState } from "react";
import { banner, Icon, universitiesData, newsData, aboutCardsData } from "..";
import Programs from "./sections/Programs";
import News from "./sections/News";
import About from "./sections/About";

const HomePage = () => {
  const [universities, setUniversities] = useState(universitiesData);
  const [news, setNews] = useState(newsData);
  const [aboutCards, setAboutCards] = useState(aboutCardsData);

  return (
    <main className="main" id="home-page">
      <div className="container">
        <section className="banner">
          <div className="img">
            <img src={banner} alt="banner" />
          </div>
          <div className="content">
            <h1 className="title">
              Biz bilan kelajagingizga investitsiya qiling
            </h1>
            <p className="description">
              <span>
                Nufuzli universitetlarda o’qishni maqsad qilganlar biz bilan
              </span>
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
                additionalClasses={["circle"]}
              />
            </p>
          </div>
        </section>
        <Programs universities={universities} />
        <News newsData={news} />
        <About aboutCards={aboutCards} />
      </div>
    </main>
  );
};

export default HomePage;
