
import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "../Navbar/Navbar";
import Hero from "../hero/Hero";
import Title from "../title/Title";
import Gallery from "../gallary/Gallery";
import Testimonial from "../testimonials/Testimonial";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
AOS.init({
  duration: 2000,
  easing: "ease",
  once: true,
  delay: 200,
});

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
