import React from "react";
import { formImg, Input, Textarea, Button } from "../..";

const Contact = () => {
  return (
    <section className="contact__section" id="contact">
      <div className="section__action">
        <h2 className="section__title">Bog’lanish</h2>
      </div>
      <div className="content">
        <div className="img">
          <img src={formImg} alt="form img" />
        </div>
        <div className="form">
          <h2 className="title">Ariza qoldirish uchun.</h2>
          <Input type="text" placeholder="Ism Familiya" />
          <Input type="number" placeholder="Telefon raqaming" />
          <Textarea
            placeholder="Ta’lim olish rejangiz (ihtiyoriy)"
            cols={5}
            rows={3}
          />
          <span className="btn__wrapper">
            <Button text="Yuborish" additionalClasses={["primary"]} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
