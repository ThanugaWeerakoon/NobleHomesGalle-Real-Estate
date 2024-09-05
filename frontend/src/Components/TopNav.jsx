import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [openNav, setOpenNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:justify-center">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/" className="flex items-center">
          Home
        </a>
      </Typography>

      <li className="relative">
        <button
          onClick={() => {
            setDropdownOpen(!dropdownOpen);
          }}
          className="flex items-center p-1 font-normal text-blue-gray"
        >
          Property
          <svg
            className={`ml-5 h-4 w-4 transform ${
              dropdownOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 9l6 6 6-6"
            />
          </svg>
        </button>
        {dropdownOpen && (
          <ul className="absolute mt-2 bg-white shadow-lg rounded-lg w-40 z-50">
            <li>
              <Link
                to="/land"
                className="block p-2 hover:bg-gray-200"
                onClick={() => {
                  setDropdownOpen(false); 
                }}
              >
                Land
              </Link>
            </li>
            <li>
              <Link
                to="/house"
                className="block p-2 hover:bg-gray-200"
                onClick={() => {
                  setDropdownOpen(false); 
                }}
              >
                House
              </Link>
            </li>
          </ul>
        )}
      </li>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="about" className="flex items-center">
          About
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#Contact" className="flex items-center">
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="w-full">
      <Navbar className="sticky text-black top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            NobleHomes
          </Typography>
          <div className="flex-grow lg:flex lg:justify-center lg:items-center">
            <div className="mr-4 hidden lg:block">{navList}</div>
          </div>
          <div className="flex items-center gap-x-1">
            <Button variant="text" size="sm" className="hidden lg:inline-block">
              <span>Log In</span>
            </Button>
            <Button variant="text" size="sm" className="hidden lg:inline-block">
              <span>Sign In</span>
            </Button>
          </div>
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
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm">
              <span>Sign In</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default TopNav;
