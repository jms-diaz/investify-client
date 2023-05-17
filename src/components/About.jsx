import HeroImage from "../assets/hero-image.png";
import InvestifyLogo from "../assets/investify-logo.png";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row items-center justify-center gradient"
    >
      <div className="md:w-1/2 flex flex-col items-center justify-center bg-black py-3">
        <img
          className="md:w-3/4 h-full object-cover object-center mx-auto"
          src={HeroImage}
          alt="hero image"
        />
        <img
          src={InvestifyLogo}
          className="w-32 md:w-64"
          alt="Investify Logo"
        />
      </div>
      <div className="md:w-1/2 md:px-6 mb-10 md:mb-0">
        <div className="md:w-3/4 mx-auto p-3">
          <h1 className="text-xl md:text-4xl font-bold mb-3 text-white">
            About Us
          </h1>
          <p className="text-white">
            Invest in your future with Investify - the learning management
            platform that empowers Filipino students with financial and digital
            literacy skills. With Investify, you can unlock your potential and
            gain the knowledge you need to build a better financial future for
            yourself.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
