import HeroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:h-screen mx-6 sm:pt-16">
      <div className="md:w-1/2 px-6 mb-10 md:mb-0">
        <div className="md:w-3/4 mx-auto">
          <p className="mb-8">
            <span className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              You can&apos;t expand your knowledge if you don&apos;t&nbsp;
            </span>
            <span className="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-[#F7EC13] to-[#EB523B] text-transparent bg-clip-text">
              invest
            </span>
          </p>
          <p className="text-gray-800 text-xl mb-8">
            Invest in your future with Investify - the learning management
            platform that empowers Filipino students with financial and digital
            literacy skills. With Investify, you can unlock your potential and
            gain the knowledge you need to build a better financial future for
            yourself.
          </p>
          <a
            href="#"
            className="bg-gray-900 text-white font-semibold py-2 px-6 rounded inline-flex items-center"
          >
            Register
          </a>
        </div>
      </div>
      <div className="md:w-1/2 h-3/4">
        <img
          className="w-3/4 h-full object-cover object-center mx-auto"
          src={HeroImage}
          alt="hero image"
        />
      </div>
    </section>
  );
};

export default Hero;
