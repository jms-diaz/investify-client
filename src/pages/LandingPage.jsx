import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

const LandingPage = () => {
  return (
    <div className="bg-gray-100">
      <NavBar />
      {/* <div id="home" className="w-full h-screen text-center">
        <div className="max-w-[1240px] h-full w-full p-2 flex justify-center items-center">
          <div>
            <h1>Invest in your learning</h1>
          </div>
          <div>
            <img src="https://via.placeholder.com/500x500"></img>
          </div>
        </div>
      </div> */}
      <Hero />
    </div>
  );
};

export default LandingPage;
