import { AiOutlineSearch } from "react-icons/ai";
import CoursesCard from "../components/CoursesCard";
import Footer from "../components/Footer";

const Courses = () => {
  return (
    <div className="bg-gray-100">
      <div className=" my-3">
        <div className="container mx-auto p-2 md:p-6">
          <h1 className="font-bold text-3xl text-primary">Courses</h1>

          <form className="flex items-center my-4">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <AiOutlineSearch fill="currentColor" />
              </div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-3"
                placeholder="Search courses..."
                required
              ></input>
            </div>
            <button
              type="submit"
              className="p-3 ml-2 text-sm font-medium text-white bg-black rounded-lg"
            >
              <AiOutlineSearch fill="currentColor" size={20} />

              <span className="sr-only">Search</span>
            </button>
          </form>
          <CoursesCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
