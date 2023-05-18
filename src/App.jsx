import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import HomePage from "./pages/home/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
