import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/title/Title";
import Hero from "./components/hero/Hero";
import Gallery from "./components/gallary/Gallery";
import Testimonial from "./components/testimonials/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import "aos/dist/aos.css";
import AOS from "aos";
AOS.init({
  duration: 2000,
  easing: "ease",
  once: true,
  delay: 200,
});

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <Title
            title={"About our place"}
            description={"Welcome to Our Place"}
          />
          <Hero />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <Title title={"Gallary"} description={"Discover the Experience"} />
          <Gallery />
        </div>
        <div data-aos="fade-up">
          <Title title={"Testimonials"} description={"Words from people"} />
          <Testimonial />
        </div>
        <div data-aos="fade-up">
          <Title title={"Contact Us"} description={"Get in touch"} />
          <Contact />
        </div>
        <Footer />
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
