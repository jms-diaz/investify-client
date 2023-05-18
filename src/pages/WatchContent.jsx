import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BsChevronLeft,
  BsCameraVideoFill,
  BsCheckCircle,
} from "react-icons/bs";

const WatchContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const content = location.state.data;

  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto p-2 md:p-6">
          <div className="flex flex-row items-center space-x-2">
            <BsChevronLeft
              size={20}
              onClick={() => navigate(-1)}
              className="cursor-pointer"
            />
            <h1 className="text-2xl text-primary font-bold">{content.title}</h1>
          </div>
          <h2 className="text-xl font-bold my-4">
            {content.courseOverviewBullets[0]}
          </h2>
          <div className="flex flex-col lg:flex-row my-4 lg:space-x-2 md:space-y-2">
            <div className="w-full lg:w-3/4 bg-white rounded-md shadow-md p-2">
              <iframe
                src="https://www.youtube.com/embed/0tZFQs7qBfQ"
                title="Web 3.0 Explained In 5 Minutes | What Is Web 3.0 ? | Web3 For Beginners | Web 3.0 | Simplilearn"
                className="w-full aspect-video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="w-full h-full lg:w-2/4 bg-white rounded-md shadow-md p-2 md:p-4">
              <h2 className="text-xl font-bold mb-2">Course Contents</h2>
              <ul>
                {content.courseOverviewBullets.map((courseTitle) => (
                  <li
                    className="flex items-center space-x-2 pb-1.5"
                    key={courseTitle}
                  >
                    <BsCameraVideoFill size={13} />
                    <a href="">
                      <span>{courseTitle}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-bold my-2">Checkpoint</h2>
              <span className="flex items-center space-x-2">
                <BsCheckCircle />
                <p>Answer the exercise to earn rewards</p>
              </span>
              <button className="my-4 text-sm text-white bg-black uppercase w-full rounded-md py-3 px-4">
                Mark As Completed
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WatchContent;
