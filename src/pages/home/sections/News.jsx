import React, { useState } from "react";
import { NewsCard, ArrowIcons } from "../..";
import { Carousel } from "react-responsive-carousel";

const News = ({ newsData }) => {
  const [dataLength, setDataLength] = useState(newsData.length);
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <section className="news__section">
      <div className="section__title">Yangiliklar</div>
      <div className="news__wrapper arrow-cards__wrapper">
        {newsData.map((news) => (
          <NewsCard
            key={news.id}
            image={`/src/assets/images/${news.image}.png`}
            title={news.title}
            description={news.description}
          />
        ))}
      </div>
      <ArrowIcons />
    </section>
  );
};

export default News;
