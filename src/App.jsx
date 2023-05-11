import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "./components/ui/Button";
import Icon from "./components/ui/Icon";
import Navbar from "./layouts/navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="wrapper">
              {/* <Button text="Ariza qoldirish" additionalClasses={["primary"]} />
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
              /> */}
              <Navbar />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
