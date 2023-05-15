import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "./components/ui/Button";
import Icon from "./components/ui/Icon";
import UniversityCard from "./components/card/UniversityCard";
import NewsCard from "./components/card/NewsCard";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import news from "./data/news.json";
import HomePage from "./pages/home/HomePage";
import Input from "./components/form/Input";
import Textarea from "./components/form/Textarea";
import CommentCard from "./components/card/CommentCard";
import ArticleCard from "./components/card/ArticleCard";
import AboutCard from "./components/card/AboutCard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomePage />
              <Footer />
            </>
          }
        />
        <Route
          path="/components"
          element={
            <div className="wrapper">
              <Button text="Ariza qoldirish" additionalClasses={["primary"]} />
              <Button text="Barchasi" additionalClasses={["secondary"]} />
              <Icon
                svg={
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="#000"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9082 30.25L34.0947 19.75"
                      stroke="#000"
                      strokeWidth="2.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M30.7988 32.0442L34.0931 19.75"
                      stroke="#000"
                      strokeWidth="2.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.7988 16.457L34.0931 19.7513"
                      stroke="#000"
                      strokeWidth="2.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                additionalClasses={["circle"]}
              />
              <UniversityCard
                image="https://assets.weforum.org/article/image/BnH7tNzciYG4f7vFw566k-OT0-mONNWI86aAluC2wy8.jpg"
                name="Myunhem texnika universiteti"
                location="Germaniya"
                specification="Magistratura"
              />
              <NewsCard
                image={`/src/assets/images/first.png`}
                title={
                  'Shahriyor Tojiboyev - "Master\'s in Law" (huquq sohasida.... '
                }
                description={
                  "\"Master's in Law\" (huquq sohasida magistratura bosqichi)ni Amerikaning nufuzli oliygohlaridan birida o'qish imkoniyatiga ega bo'ldi."
                }
              />
              <Input placeholder="ism familiya" type="text" />
              <Textarea
                placeholder="Ta’lim olish rejangiz (ihtiyoriy)"
                cols={5}
                rows={3}
              />
              <CommentCard
                image="https://imgv3.fotor.com/images/slider-image/A-blurry-image-of-a-woman-wearing-red.jpg"
                name="Nodir Jumaev"
                specification="Boston universiteti talabasi"
              />
              <ArticleCard
                image="https://images.pexels.com/photos/921259/pexels-photo-921259.jpeg?cs=srgb&dl=pexels-brett-sayles-921259.jpg&fm=jpg"
                title="Amerika haqida siz bilmagan haqiqatlar"
                description={
                  " U AQSHning nufuzli universitetlaridan biriga \"Chemical Engineering\" yo'nalishiga hujjat topshirdi va bakalavr bosqichida o'qish imkoniyatini qo'lga kiritdi... "
                }
              />
              <AboutCard image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" />
              <AboutCard
                bg="linear-gradient(135.6deg, #FF3605 -6.48%, #7A00F9 105.85%)"
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
                    additionalClasses={["circle lg"]}
                  />
                }
              />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
