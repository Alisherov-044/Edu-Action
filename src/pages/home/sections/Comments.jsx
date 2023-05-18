import React from "react";
import { CommentCard, ArrowIcons } from "../..";

const Comments = ({ comments }) => {
  return (
    <section className="comments__section">
      <div className="section__action">
        <h2 className="section__title">
          <span className="to-btn--color">Talabalardan</span> izohlar
        </h2>
      </div>
      <div className="comments__wrapper arrow-cards__wrapper">
        {comments.map((comment) => (
          <CommentCard
            key={comment.id}
            image={comment.image}
            name={`${comment.first_name} ${comment.last_name}`}
            specification={comment.specification}
            link={comment.link}
          />
        ))}
      </div>
      <ArrowIcons />
    </section>
  );
};

export default Comments;
