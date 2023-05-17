import SampleImage from "../assets/sample-image.png";

const CoursesCard = () => {
  return (
    <div className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
      <div className="p-5 py-10 bg-white border shadow-md transform duration-500 hover:-translate-y-2 cursor-pointer">
        <img src={SampleImage} alt="" className="w-full" />
        <h1 className="text-xl md:text-2xl mb-2 text-primary font-semibold">
          Blockchain 101
        </h1>
        <p className="mb-2 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          eget tellus eu ante sodales. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Pellentesque eget tellus eu ante sodales
        </p>
        <button className="p-2 px-6 w-full bg-black hover:bg-gray-900 text-white rounded-md">
          View Course
        </button>
      </div>

      <div className="p-5 py-10 bg-white border shadow-md transform duration-500 hover:-translate-y-2 cursor-pointer">
        <img src={SampleImage} alt="" className="w-full" />
        <h1 className="text-xl md:text-2xl mb-2 text-primary font-semibold">
          Solidity
        </h1>
        <p className="mb-2 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          eget tellus eu ante sodales. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Pellentesque eget tellus eu ante sodales
        </p>
        <button className="p-2 px-6 w-full bg-black hover:bg-gray-900 text-white rounded-md">
          View Course
        </button>
      </div>

      <div className="p-5 py-10 bg-white border shadow-md transform duration-500 hover:-translate-y-2 cursor-pointer">
        <img src={SampleImage} alt="" className="w-full" />
        <h1 className="text-xl md:text-2xl mb-2 text-primary font-semibold">
          Smart Contracts
        </h1>
        <p className="mb-2 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          eget tellus eu ante sodales. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Pellentesque eget tellus eu ante sodales
        </p>
        <button className="p-2 px-6 w-full bg-black hover:bg-gray-900 text-white rounded-md">
          View Course
        </button>
      </div>

      <div className="p-5 py-10 bg-white border shadow-md transform duration-500 hover:-translate-y-2 cursor-pointer">
        <img src={SampleImage} alt="" className="w-full" />
        <h1 className="text-xl md:text-2xl mb-2 text-primary font-semibold">
          Web 3.0 Basics
        </h1>
        <p className="mb-2 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          eget tellus eu ante sodales. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Pellentesque eget tellus eu ante sodales
        </p>
        <button className="p-2 px-6 w-full bg-black hover:bg-gray-900 text-white rounded-md">
          View Course
        </button>
      </div>
    </div>
  );
};

export default CoursesCard;
