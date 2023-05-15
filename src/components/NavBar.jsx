import InvestifyLogo from "../assets/investify-logo.png";

const NavBar = () => {
  return (
    <div className="fixed w-full h-20 z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-gray-950">
        <a href="/" className=" text-white">
          <img src={InvestifyLogo} alt="/" width="100" height="90" />
        </a>
        <div>
          <ul className="hidden md:flex items-center">
            <a href="/">
              <li className="ml-10 hover:border-b text-white">Home</li>
            </a>
            <a href="/#about">
              <li className="ml-10 hover:border-b  text-white">About</li>
            </a>
            <a href="/#skills">
              <li className="ml-10 hover:border-b  text-white">Course</li>
            </a>
            <a href="/#contact">
              <li className="ml-10 hover:border-b text-white">Contact</li>
            </a>
            <a href="/login">
              <li className="ml-10 font-semibold bg-white py-2 px-4 rounded">
                Login
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
