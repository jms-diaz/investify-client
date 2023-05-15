import { useState } from "react";
import InvestifyLogo from "../assets/investify-logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Courses",
      path: "/courses",
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header className="relative h-20 z-[100] w-full shadow">
      <nav className="flex items-center justify-between w-full h-full px-2 2xl:px-16 bg-gray-950">
        <div className="flex items-center">
          <Link to="/" className="mr-10">
            <img src={InvestifyLogo} className="w-20" alt="AIO Logo" />
          </Link>
        </div>
        <div className="hidden md:flex">
          <ul className="hidden items-center space-x-2 md:flex">
            {links.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className="ml-10 hover:border-b text-white rounded py-2 px-4 font-medium transition hover:bg-white hover:text-black
"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/login"
            className="ml-10 font-semibold bg-white py-2 px-6 rounded"
          >
            Login
          </Link>
        </div>
        <button onClick={handleIsOpen} className="md:hidden text-white">
          <FaBars size={20} />
        </button>
      </nav>

      <div
        className={
          isOpen
            ? "fixed left-0 top-0 h-screen w-full bg-black bg-opacity-40 md:hidden"
            : ""
        }
      >
        <nav
          className={
            isOpen
              ? "fixed left-0 top-0 h-screen w-[75%] bg-gray-900 p-6 duration-150 ease-in sm:w-[60%] md:w-[45%]"
              : "fixed left-[-100%] top-0 p-6 duration-150 ease-in"
          }
        >
          <div className="flex items-center justify-between">
            <img src={InvestifyLogo} alt="Logo" className="h-10" />
            <button onClick={handleIsOpen} className="text-white">
              <MdClose size={25} />
            </button>
          </div>
          <div>
            <ul className="my-12 inline-block space-y-10">
              {links.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    className="rounded py-3 font-medium hover:underline text-white"
                    onClick={handleIsOpen}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-2 text-center">
              <Link
                to="/login"
                className="font-semibold bg-white py-2 px-6 rounded"
                onClick={handleIsOpen}
              >
                Login
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
    // <div className="fixed w-full h-20 z-[100]">
    //   <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-gray-950">
    //     <Link to="/" className=" text-white">
    //       <img src={InvestifyLogo} alt="/" width="100" height="90" />
    //     </Link>
    //     <div>
    //       <ul className="hidden md:flex items-center">
    //         <a href="/">
    //           <li className="ml-10 hover:border-b text-white">Home</li>
    //         </a>
    //         <a href="/#about">
    //           <li className="ml-10 hover:border-b  text-white">About</li>
    //         </a>
    //         <a href="/#skills">
    //           <li className="ml-10 hover:border-b  text-white">Course</li>
    //         </a>
    //         <a href="/#contact">
    //           <li className="ml-10 hover:border-b text-white">Contact</li>
    //         </a>
    //         <a href="/login">
    //           <li className="ml-10 font-semibold bg-white py-2 px-4 rounded">
    //             Login
    //           </li>
    //         </a>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default NavBar;
