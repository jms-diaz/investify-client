import { Link, useNavigate } from "react-router-dom";
import HeroImage from "../assets/hero-image.png";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/courses");
  };

  return (
    <div className="flex flex-wrap min-h-screen fixed w-full content-center justify-center gradient py-10">
      <div className=" flex shadow-md bg-black rounded-lg">
        <div className="md:flex flex-wrap content-center justify-center hidden w-[30rem] h-[32rem]">
          <img
            className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
            src={HeroImage}
          />
        </div>
        <div className="flex flex-wrap content-center justify-center rounded-lg bg-white md:w-[24rem] md:h-[32rem] w-[20rem] h-[26rem]">
          <div className="w-72">
            <h1 className="text-2xl font-bold text-center">Sign In</h1>

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
                  Password
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
                  Remember me
                </label>
                <a
                  href="#"
                  className="text-xs font-semibold text-gray-700 underline"
                >
                  Forgot password?
                </a>
              </div>

              <div className="mb-3">
                <button
                  onClick={handleLogin}
                  className="mb-2 block w-full font-bold text-center text-white bg-black px-6 py-2 rounded-md"
                >
                  Sign in
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
                Don&apos;t have account?{" "}
              </span>
              <Link
                to="/register"
                className="text-xs font-semibold text-gray-700 underline"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
