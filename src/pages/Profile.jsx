import SampleImage from "../assets/crypto.jpg";
import { BsBook, BsAward } from "react-icons/bs";
import Footer from "../components/Footer";

const Profile = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto p-2 md:p-6">
          <h1 className="text-3xl font-bold text-primary pb-6">My Profile</h1>
          <div className="flex flex-col md:flex-row md:space-x-3">
            <div className="flex flex-wrap md:flex-col w-full md:w-1/4 space-y-3">
              <div className="w-full bg-white flex flex-col items-center rounded-md shadow-md p-2 md:p-4">
                <img
                  src={SampleImage}
                  alt=""
                  className="aspect-square h-auto max-w-xs rounded-full object-cover mb-2"
                />
                <h2 className="text-primary font-bold text-xl mb-2">
                  James Diaz
                </h2>
                <p className="text-sm">jamesdiaz@gmail.com</p>
                <p className="mb-2 text-sm">(+63) 938 472 2987</p>
                <button className="text-sm bg-white border border-gray-400 uppercase w-full mb-2 rounded-md py-2 px-4">
                  Connect Wallet
                </button>
                <button className="text-sm text-white bg-black uppercase w-full rounded-md py-2 px-4">
                  Logout
                </button>
              </div>
              <div className="bg-white flex md:flex-col flex-wrap w-full justify-evenly rounded-md shadow-md p-2 md:p-4 text-gray-500">
                <h2 className="font-bold text-xl my-2">Learnings</h2>
                <div className="flex flex-col">
                  <p className="text-sm">Courses</p>
                  <span className="mb-2 flex items-center space-x-2">
                    <BsBook />
                    <p>3 Courses</p>
                  </span>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm">Certificates</p>
                  <span className="mb-2 flex items-center space-x-2">
                    <BsAward />
                    <p>2 Certificates</p>
                  </span>
                </div>
              </div>
            </div>
            {/* Basic Info */}
            <div className="bg-white w-full md:w-3/4 rounded-md shadow-md p-2 md:p-4 mt-2 md:mt-0">
              <h2 className="font-bold text-xl my-2">Basic Information</h2>
              <form>
                <div className="grid md:grid-cols-2 md:space-x-2">
                  <div className="mb-3">
                    <label className="mb-2 block text-xs font-semibold">
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="jms-diaz"
                      className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="mb-2 block text-xs font-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="James Diaz"
                      className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="mb-2 block text-xs font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="jamesdiaz@gmail.com"
                      className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="mb-2 block text-xs font-semibold">
                      Contact Number
                    </label>
                    <input
                      type="phone"
                      placeholder="(+63) 938 472 2987"
                      className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500"
                    />
                  </div>
                </div>
                <button className="text-sm text-white bg-black w-full rounded-md py-2 px-4 mb-2">
                  Update Info
                </button>
              </form>
              {/* Courses */}
              <div className="my-4">
                <h2 className="font-bold text-xl my-4">My Courses</h2>
                <div className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
                  <div className="p-5 py-10 bg-white border rounded-md shadow-md transform duration-500 h-full hover:-translate-y-2 cursor-pointer">
                    <img src={SampleImage} alt="" className="w-full" />
                    <h1 className="text-xl mb-2 text-primary font-semibold">
                      Introduction to Web3 Technologies
                    </h1>
                    <button className="p-2 px-6 w-full bg-black  text-white rounded-md">
                      View Course
                    </button>
                  </div>
                  <div className="p-5 py-10 bg-white border rounded-md shadow-md transform duration-500 h-full hover:-translate-y-2 cursor-pointer">
                    <img src={SampleImage} alt="" className="w-full" />
                    <h1 className="text-xl mb-2 text-primary font-semibold">
                      Introduction to Web3 Technologies
                    </h1>
                    <button className="p-2 px-6 w-full bg-black  text-white rounded-md">
                      View Course
                    </button>
                  </div>
                  <div className="p-5 py-10 bg-white border rounded-md shadow-md transform duration-500 h-full hover:-translate-y-2 cursor-pointer">
                    <img src={SampleImage} alt="" className="w-full" />
                    <h1 className="text-xl mb-2 text-primary font-semibold">
                      Introduction to Web3 Technologies
                    </h1>
                    <button className="p-2 px-6 w-full bg-black  text-white rounded-md">
                      View Course
                    </button>
                  </div>
                </div>
              </div>

              {/* Certificates */}
              <div className="my-4">
                <h2 className="font-bold text-xl mb-4">My Certificates</h2>
                <div className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
                  <div className="p-5 py-10 bg-white border rounded-md shadow-md transform duration-500 h-full hover:-translate-y-2 cursor-pointer">
                    <img src={SampleImage} alt="" className="w-full" />
                    <h1 className="text-xl mb-2 text-primary font-semibold">
                      Introduction to Web3 Technologies
                    </h1>
                    <button className="p-2 px-6 w-full bg-black  text-white rounded-md">
                      View Course
                    </button>
                  </div>
                  <div className="p-5 py-10 bg-white border rounded-md shadow-md transform duration-500 h-full hover:-translate-y-2 cursor-pointer">
                    <img src={SampleImage} alt="" className="w-full" />
                    <h1 className="text-xl mb-2 text-primary font-semibold">
                      Introduction to Web3 Technologies
                    </h1>
                    <button className="p-2 px-6 w-full bg-black  text-white rounded-md">
                      View Course
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
