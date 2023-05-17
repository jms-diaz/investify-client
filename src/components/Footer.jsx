import { AiOutlineSearch } from "react-icons/ai";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Logo from "../assets/flat-logo.png";

const Footer = () => {
  return (
    <div className="bg-black">
      {/* Logo */}
      <div className="flex flex-col md:w-5/6 md:flex-row mx-auto justify-evenly md:px-4">
        <div className="md:w-1/4 my-3 flex flex-col items-center py-4">
          <img src={Logo} alt="" width={80} />
          <p className="mt-3 text-sm text-white px-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            adipisci praesentium, voluptas odit iure dolorum ipsum excepturi vel
            illo laboriosam, ea possimus.
          </p>
        </div>

        {/* Links */}
        <div className="md:w-2/4 py-4">
          {/* Search bar */}
          <form className="flex justify-center items-center w-3/4 mx-auto my-4">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <AiOutlineSearch fill="currentColor" />
              </div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-3"
                placeholder="Search..."
                required
              ></input>
            </div>
          </form>
          <div className="grid grid-cols-2 p-4 md:place-items-center">
            <div className="">
              <p className="font-bold text-[#FFF200]">Resources</p>
              <ul>
                <li className="text-white">Application</li>
                <li className="text-white">Documentation</li>
                <li className="text-white">Systems</li>
                <li className="text-white">FAQs</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-[#FFF200]">Company</p>
              <ul>
                <li className="text-white">Application</li>
                <li className="text-white">Documentation</li>
                <li className="text-white">Systems</li>
                <li className="text-white">FAQs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="md:w-1/5 gradient">
          <div className="flex md:flex-col flex-wrap p-4 md:mt-12 justify-between md:items-start items-center">
            <div className="flex flex-row items-center mb-2">
              <FaFacebookF fill="currentColor" />
              <span className="ml-2">InvestifyPH</span>
            </div>
            <div className="flex flex-row items-center mb-2">
              <FaTwitter fill="currentColor" />
              <span className="ml-2">@investifyph</span>
            </div>
            <div className="flex flex-row items-center mb-2">
              <FaLinkedin fill="currentColor" />
              <span className="ml-2">InvestifyPH</span>
            </div>
            <div className="flex flex-row items-center mb-2">
              <FiMail />
              <span className="ml-2">inquiries@investify.ph</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
