import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import TopCourses from "../components/TopCourses";

const LandingPage = () => {
  return (
    <div className="bg-gray-100">
      <Hero />
      <About />
      <TopCourses />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
