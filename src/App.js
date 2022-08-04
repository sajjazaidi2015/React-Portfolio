// import logo from './logo.svg';
import React from "react";
import './App.css';
import './home.css';
import './global.mobile.css';
import './about-me.css';
import './aboutme.mobile.css';
import './contact-me.css';
import './contact-me.mobile.css';
import './portfolio.css';
import './portfolio.mobile.css';
import Home from "./component/Home";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
