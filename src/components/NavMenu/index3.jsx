import { BsCodeSquare } from "react-icons/bs";
import { GoProjectRoadmap } from "react-icons/go";
import { BsInfoCircle } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi2";
import { PiCompassTool } from "react-icons/pi";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <>
      <div className="lg:hidden btm-nav bg-white fixed bottom-0 left-0 right-0 flex flex-row justify-around items-center p-3">
        <Link to="/">
          <button>
            <HiOutlineHome className="text-gray-700 w-6 h-6" />
          </button>
        </Link>
        <Link to="/about">
          <button>
            <BsInfoCircle className="text-gray-700 w-5 h-5" />
          </button>
        </Link>
        <Link to="/tool">
          <button>
            <BsCodeSquare className="text-gray-700 w-5 h-5" />
          </button>
        </Link>
        <Link to="/project">
          <button>
            <PiCompassTool className="text-gray-700 w-6 h-6" />
          </button>
        </Link>
        <Link to="/blog">
          <button>
            <GoProjectRoadmap className="text-gray-700 w-6 h-6" />
          </button>
        </Link>
      </div>
    </>
  );
};

export default NavMenu;
