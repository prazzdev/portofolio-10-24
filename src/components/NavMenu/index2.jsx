import { Link } from "react-router-dom";

export default function NavMenu() {
  return (
    <>
      <div className="absolute top-0 drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            id=""
            className="lg:hidden fixed bottom-[2em] right-[1.5em] p-2 rounded-md bg-teal-500"
          >
            <img src={"/images/icons/menu.svg"} height={28} width={28} />
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu absolute bottom-12 p-4 w-50 h-fit text-base-content">
            {/* <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li> */}
            <div id="headerMenu" className="flex flex-col w-[120px] z-99">
              <Link
                to="/"
                className="font-bold px-5 py-2 bg-white text-gray-800 rounded-md shadow-md mb-3 transition hover:bg-gray-100"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="font-bold px-4 py-2 bg-white text-black rounded-md shadow-md mb-3 transition hover:bg-gray-100"
              >
                About
              </Link>
              <Link
                to="/skills"
                className="font-bold px-4 py-2 bg-white text-black rounded-md shadow-md mb-3 transition hover:bg-gray-100"
              >
                Skills
              </Link>
              <Link
                to="/projects"
                className="font-bold px-4 py-2 bg-white text-black rounded-md shadow-md mb-3 transition hover:bg-gray-100"
              >
                Projects
              </Link>
              <Link
                to="/blogs"
                className="font-bold px-4 py-2 bg-white text-black rounded-md shadow-md mb-3 transition hover:bg-gray-100"
              >
                Blog
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
