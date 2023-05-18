import React from "react";
import { Button, ArticleCard, ArrowIcons } from "../..";

const Articles = ({ articles }) => {
  return (
    <section className="articles__section">
      <div className="section__action">
        <h2 className="section__title">Maqolalar</h2>
        <Button text="Barchasi" additionalClasses={["secondary"]} />
      </div>
      <div className="articles__wrapper arrow-cards__wrapper">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            image={article.image}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
      <ArrowIcons />
    </section>
  );
};

export default Articles;
