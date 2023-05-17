import { Link, useNavigate } from "react-router-dom";
import HeroImage from "../assets/hero-image.png";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    localStorage.setItem("user", "authenticated");
    navigate("/courses");
  };

  return (
    <div className="flex flex-wrap min-h-screen md:fixed w-full content-center justify-center gradient md:py-10 py-0">
      <div className="flex shadow-md bg-black rounded-lg">
        <div className="md:flex flex-wrap content-center justify-center hidden w-[32rem] h-[36rem]">
          <img
            className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
            src={HeroImage}
          />
        </div>
        <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white rounded-lg md:w-[24rem] md:h-[36rem] w-[20rem] h-[32rem]">
          <div className="w-72">
            <h1 className="text-2xl font-bold text-center">
              Create Your Account
            </h1>

            <form className="mt-4">
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="*****"
                  className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="*****"
                  className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-4 flex flex-wrap content-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="mr-1 checked:bg-gray-700"
                />{" "}
                <label
                  htmlFor="remember"
                  className="mr-auto text-xs font-semibold"
                >
                  I accept the Terms and Conditions
                </label>
              </div>

              <div className="mb-3">
                <button
                  onClick={handleRegister}
                  className="mb-2 block w-full font-bold text-center text-white bg-black px-6 py-2 rounded-md"
                >
                  Create Account
                </button>
                <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-6 py-2 rounded-md">
                  <img
                    className="w-5 mr-2"
                    src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                  />
                  Sign in with Google
                </button>
              </div>
            </form>

            <div className="text-center">
              <span className="text-xs text-gray-400 font-semibold">
                Already have an account?{" "}
              </span>
              <Link
                to="/login"
                className="text-xs font-semibold text-gray-700 underline"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
