import { topics } from "../components/courses";
import { useNavigate } from "react-router-dom";
import SampleImage from "../assets/sample-image.png";

const CoursesCard = () => {
  const navigate = useNavigate();
  const courses = topics;

  const viewCourse = (course) => {
    navigate("sample-course", { state: { data: course } });
  };

  return (
    <div className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
      {courses.map((course) => (
        <div
          key={course.title}
          className="p-5 py-10 bg-white border shadow-md transform duration-500 h-full hover:-translate-y-2 cursor-pointer"
        >
          <img src={SampleImage} alt="" className="w-full" />
          <h1 className="text-xl md:text-2xl mb-2 text-primary font-semibold">
            {course.title}
          </h1>
          <p className="mb-2 text-sm">{course.description}</p>
          <button
            onClick={() => viewCourse(course)}
            className="p-2 px-6 w-full bg-black  text-white rounded-md"
          >
            View Course
          </button>
        </div>
      ))}
    </div>
  );
};

export default CoursesCard;
