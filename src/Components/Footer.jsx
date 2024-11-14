import { useState } from "react";
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
    <div className="mt-[60px] bg-[#6F97FF] py-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        
        {/* NobleHome Section */}
        <div className="text-left text-white">
          <h2 className="font-moul text-2xl sm:text-3xl font-bold tracking-tight">
            NobleHome
            <span className="block mt-1 text-lg sm:text-xl">Galle</span>
          </h2>
          <p className="mt-5 text-sm sm:text-base font-light">
            Discover exceptional living in Galle with NobleHome. Our properties
            combine comfort, elegance, and convenience to offer you a place
            you’ll be proud to call home. Whether you're searching for a cozy
            residence, a spacious family home, or a prime commercial space,
            NobleHome provides curated options tailored to your lifestyle.
            Experience seamless buying, selling, and renting services designed
            to make your real estate journey as effortless as possible. Find
            your dream property with NobleHome Galle, where your ideal space
            awaits.
          </p>
          
          <div className="flex space-x-4 mt-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#3b5998] transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1DA1F2] transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#E1306C] transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#E60023] transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faPinterest} size="lg" />
            </a>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="text-center text-white">
          <h2 className="font-moul text-2xl sm:text-3xl font-bold tracking-tight">
            NAVIGATION
          </h2>
          <ul className="mt-6 space-y-2 text-sm sm:text-base">
            <li>
              <a href="/" className="hover:underline transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline transition-colors duration-300">
                About
              </a>
            </li>
            <li>
              <a
                onClick={togglePropertyDropdown}
                className="cursor-pointer hover:underline transition-colors duration-300"
              >
                Property
              </a>
              {isPropertyDropdownOpen && (
                <ul className="ml-4 mt-2 space-y-1">
                  <li>
                    <a href="/land" className="text-white hover:underline transition-colors duration-300">
                      Land
                    </a>
                  </li>
                  <li>
                    <a href="/house" className="text-white hover:underline transition-colors duration-300">
                      House
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="/contact" className="hover:underline transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Sales Support Section */}
        <div className="text-left text-white">
          <h2 className="font-moul text-2xl sm:text-3xl font-bold tracking-tight">
            SALES SUPPORT
          </h2>
          <p className="mt-4 text-sm sm:text-base font-light">
            <strong className="text-lg sm:text-xl">Phone:</strong>
            <br />
            +(94) 77 835 4380
          </p>
          <p className="mt-4 text-sm sm:text-base font-light">
            <strong className="text-lg sm:text-xl">Email:</strong>
            <br />
            <a
              href="mailto:noblehomegalle15@gmail.com"
              className="hover:underline"
            >
              noblehomegalle15@gmail.com
            </a>
          </p>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="text-center text-white mt-10 pt-6 border-t border-white border-opacity-20 text-sm">
        <p>&copy; {new Date().getFullYear()} NobleHome Galle. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
