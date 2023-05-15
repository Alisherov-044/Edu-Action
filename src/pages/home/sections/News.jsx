import React from "react";
import { NewsCard } from "../..";

const News = ({ newsData }) => {
  return (
    <section className="news__section">
      <div className="section__title">Yangiliklar</div>
      <div className="news__wrapper">
        {newsData.map((news) => (
          <NewsCard
            key={news.id}
            image={`/src/assets/images/${news.image}.png`}
            title={news.title}
            description={news.description}
          />
        ))}
      </div>
    </section>
  );
};

export default News;
