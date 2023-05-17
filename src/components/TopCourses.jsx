import React from "react";
import CoursesCard from "./CoursesCard";
import { Link } from "react-router-dom";

const TopCourses = () => {
  return (
    <div className="container mx-auto p-3 md:p-4" id="courses">
      <h1 className="text-xl md:text-4xl font-bold mb-3 py-4">Top Courses</h1>
      <CoursesCard />
      <hr className="my-4" />
      <Link to="/courses" className="flex justify-center md:justify-end my-2">
        <button className="p-2 px-10 md:w-fit hover:bg-black hover:text-white border border-black rounded-md">
          View All Courses
        </button>
      </Link>
    </div>
  );
};

export default TopCourses;
