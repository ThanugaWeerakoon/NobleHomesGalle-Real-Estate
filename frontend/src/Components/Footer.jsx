import  { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [isPropertyDropdownOpen, setIsPropertyDropdownOpen] = useState(false);

  const togglePropertyDropdown = () => {
    setIsPropertyDropdownOpen(!isPropertyDropdownOpen);
  };

  return (
    <div className="mt-[60px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center h-auto bg-[#6F97FF] p-4">
        <div className="text-left">
          <h2 className="lg:px-10 font-moul text-1xl font-bold tracking-tight text-white sm:text-3xl sm:leading-none">
            Noble
            <span className="tracking-[.25em]">
              <br /> Homes
            </span>
          </h2>
          <h2 className="lg:px-10 mt-5 font-moul text-1xl font-medium tracking-tight text-white sm:text-1xl sm:leading-none">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h2>
          <div className="lg:px-10 flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FontAwesomeIcon icon={faPinterest} size="2x" />
            </a>
          </div>
        </div>

        <div className="font-poppins text-center">
          <h2 className="lg:px-10 font-moul text-1xl font-bold tracking-tight text-white sm:text-2xl sm:leading-none">
            NAVIGATION
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/" className="text-white hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-white hover:underline">
                About
              </a>
            </li>
            <li>
              <a
                onClick={togglePropertyDropdown}
                className="text-white hover:underline cursor-pointer"
              >
                Property
              </a>
              {isPropertyDropdownOpen && (
                <ul className="ml-4 mt-2 space-y-1">
                  <li>
                    <a href="/land" className="text-white hover:underline">
                      Land
                    </a>
                  </li>
                  <li>
                    <a href="/house" className="text-white hover:underline">
                      House
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="/contact" className="text-white hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="text-white font-poppins text-left">
          <h2 className="lg:px-10 font-moul text-1xl font-medium tracking-tight text-white sm:text-1xl sm:leading-none">
            SALES SUPPORT
          </h2>
          <br />
          <h2 className="lg:px-10 font-moul text-1xl font-bold tracking-tight text-white sm:text-3xl sm:leading-none">
            +(62)21 2002-2012
          </h2>
          <br />
          <h2 className="lg:px-10 font-moul text-1xl font-bold tracking-tight text-white sm:text-1xl sm:leading-none">
            EMAIL BUSINESS
          </h2>
          <br />
          <h2 className="lg:px-10 font-moul text-1xl font-bold tracking-tight text-white sm:text-3xl sm:leading-none">
            Hello@domain.com
          </h2>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Footer;
