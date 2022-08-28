import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "./App.css";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Careers from "./Pages/careers";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import GoToTop from "./Components/GoToTop";
import RouteAsObj from "./Pages/RouteAsObject";
import TestEmail from "./Pages/TestEmail";
import Error_Page from "./Components/Error_Page";
import ScrolltoTop from "./Components/ScrolltoTop";
// import Scroller from "./Components/Scroller";

function App() {
  return (
    <BrowserRouter>
      <ScrolltoTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/Services/*" element={<RouteAsObj />}></Route>
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testEmail" element={<TestEmail />} />
        <Route path="*" element={<Error_Page />} />
      </Routes>
      <GoToTop />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
