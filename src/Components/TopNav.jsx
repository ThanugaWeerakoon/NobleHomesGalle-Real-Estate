import { useState, useEffect } from "react";
import { Navbar, Typography, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import logo from '../assests/images/logo.jpg'; // Import the logo

const TopNav = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:justify-center">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal hover:text-blue-500 transition-all duration-300 ease-in-out">
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>

      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal hover:text-blue-500 transition-all duration-300 ease-in-out">
        <Link to="/land" className="flex items-center">
          Properties
        </Link>
      </Typography>

      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal hover:text-blue-500 transition-all duration-300 ease-in-out">
        <Link to="/about" className="flex items-center">
          About
        </Link>
      </Typography>

      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal hover:text-blue-500 transition-all duration-300 ease-in-out">
        <Link to="/contact" className="flex items-center">
          Contact
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div className="w-full">
      <Navbar className="sticky text-black top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-white shadow-md transition-all duration-300 ease-in-out hover:shadow-lg">
        <div className="flex items-center justify-between text-blue-gray-900">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-16 w-auto transition-all duration-300 ease-in-out hover:scale-110" /> {/* Increased size of logo and hover effect */}
            </Link>
          </div>

          <div className="flex-grow lg:flex lg:justify-center lg:items-center">
            <div className="mr-4 hidden lg:block">{navList}</div>
          </div>

          {/* Admin Link */}
          <div className="flex items-center">
            <Link to="/admin">
              <Typography variant="small" color="blue-gray" className="cursor-pointer text-sm font-medium hover:text-blue-500 transition-all duration-300 ease-in-out">
                ADMIN
              </Typography>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </Navbar>
    </div>
  );
};

export default TopNav;
