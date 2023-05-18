import SampleImage from "../assets/crypto.jpg";
import { BsCameraVideoFill, BsStack } from "react-icons/bs";
import { BiBook } from "react-icons/bi";
import { MdOutlineQuiz } from "react-icons/md";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";

const SingleCourse = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const content = location.state.data;
  const handleWatch = (course) => {
    navigate("/watch", { state: { data: course } });
  };

  return (
    <div className="bg-gray-100">
      <img src={SampleImage} alt="" className="w-full h-60 object-cover" />
      <div className="container mx-auto p-2 md:p-6">
        <h1 className="text-3xl font-bold text-primary pb-6">
          {content.title}
        </h1>
        <div className="flex flex-col md:flex-row space-y-4">
          <div className="w-full md:w-3/4">
            <p className="text-xl font-bold pb-2">About this course</p>
            <p className="pb-4 md:w-3/4">{content.description}</p>
            <p className="text-xl font-bold py-2">Course Overview</p>
            <ul>
              {content.courseOverviewBullets.map((courseTitle) => (
                <li
                  className="flex items-center space-x-3 pb-1.5"
                  key={courseTitle}
                >
                  <BsCameraVideoFill size={15} />
                  <a href="#" className="truncate">
                    <span className="truncate">{courseTitle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white w-full h-fit flex md:flex-col flex-wrap md:w-1/3 rounded shadow-lg p-2 md:p-4">
            <div className="flex flex-col items-center w-full">
              <p className="text-sm">Rewards</p>
              <span className="flex flex-row items-center pb-2 md:pb-6">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/5824.png"
                  width="40"
                  alt=""
                />
                <p className="ml-2 text-xl font-bold">500 SLP</p>
              </span>
            </div>
            <div className="flex md:flex-col flex-wrap justify-center">
              <div className="mr-3">
                <p className="text-sm font-semibold">Modules</p>
                <span className="text-sm pb-2 md:pb-6 flex items-center">
                  <BiBook className="mr-2" size={20} /> 1 Module
                </span>
              </div>
              <div className="mr-3">
                <p className="text-sm font-semibold">Topics</p>
                <span className="text-sm pb-2 md:pb-6 flex items-center">
                  <BsStack className="mr-2" size={20} /> 5 Topics
                </span>
              </div>
              <div className="mr-3">
                <p className="text-sm font-semibold">Exercises</p>
                <span className="text-sm pb-2 md:pb-6 flex items-center">
                  <MdOutlineQuiz className="mr-2" size={20} /> 5 Topics
                </span>
              </div>
              <div className="flex flex-col my-3 md:my-2 w-full">
                <button
                  onClick={() => handleWatch(content)}
                  className="uppercase mb-2 font-bold text-center text-white bg-black px-6 border border-black py-2 rounded-md"
                >
                  Enroll
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleCourse;
