import { CustomFlowbiteTheme, Flowbite, Navbar } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  color?: string;
}

const Header = ({ color }: Props) => {
  const location = useLocation()
  return (
    <> 
    {/* <nav className={`${color === "black" ? "bg-[#141617] text-[#C2C8CB]" : "bg-white text-[#061818]"}`}>
     
      <div className=" flex flex-wrap items-center justify-between mx-auto py-4 lg:px-[300px] px-10">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-sm font-medium whitespace-nowrap ">Jacinta Chianumba </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
     
    </nav> */}




    <Navbar fluid rounded className={`${color === "black" ? "bg-[#141617] text-[#C2C8CB]" : "bg-white text-[#061818]"} py-4 lg:px-[300px] px-6`}>
      <Navbar.Brand as={Link} to="/">
      
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Jacinta Chianumba</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link to="/" as={Link}  className={`${location.pathname === '/' ? 'underline decoration-2 decoration-[#73A3A9]' : ''}`}>
          Work
        </Navbar.Link>
        <Navbar.Link as={Link} to="/about" className={`${location.pathname === '/about' ? 'underline decoration-2 decoration-[#73A3A9]' : ''}`}>
          About
        </Navbar.Link>
        <Navbar.Link as={Link} to="/resume" className={`${location.pathname === '/resume' ? 'underline decoration-2 decoration-[#73A3A9]' : ''}`}>Resume</Navbar.Link>
      
      </Navbar.Collapse>
    </Navbar>



    </>
   
  );
};

export default Header;
