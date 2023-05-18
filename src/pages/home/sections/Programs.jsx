import React from "react";
import { Button, UniversityCard } from "../..";

const Programs = ({ universities }) => {
  return (
    <section className="top-programs__section">
      <div className="action">
        <div className="section__title">
          Top <span className="to-btn--color">dasturlar</span>
        </div>
        <Button text="Barchasi" additionalClasses={["secondary"]} />
      </div>
      <div className="cards__wrapper">
        {universities.map((university) => (
          <UniversityCard
            key={university.id}
            image={university.image}
            name={university.name}
            location={university.location}
            specification={university.specification}
          />
        ))}
      </div>
    </section>
  );
};

export default Programs;
