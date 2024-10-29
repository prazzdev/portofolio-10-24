import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header bg-white fixed top-0 right-0 left-0 z-10 flex justify-around py-5 px-16 border-b border-1 border-gray-300">
        <div id="headerMenu" className="">
          <Link
            to="/"
            className="font-bold px-5 py-2 rounded-md transition hover:bg-gray-50"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-bold px-4 py-2 rounded-md transition hover:bg-gray-50"
          >
            About
          </Link>
          <Link
            to="/tool"
            className="font-bold px-4 py-2 rounded-md transition hover:bg-gray-50"
          >
            Tool
          </Link>
          <Link
            to="/project"
            className="font-bold px-4 py-2 rounded-md transition hover:bg-gray-50"
          >
            Project
          </Link>
          <Link
            to="/blog"
            className="font-bold px-4 py-2 rounded-md transition hover:bg-gray-50"
          >
            Blog
          </Link>
        </div>
        <div id="lightDarkMode" className=""></div>
      </header>
    </>
  );
}
