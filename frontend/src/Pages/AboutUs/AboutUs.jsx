import about from "../../assests/images/abountBG.png";
import building from "../../assests/images/building.png";
import image1 from "../../assests/images/Ellipse1.png";
import image2 from "../../assests/images/Ellipse2.png";
import image3 from "../../assests/images/Ellipse3.png";
import image4 from "../../assests/images/Ellipse4.png";
import bgCard from "../../assests/images/BigCard.png";
import card1 from "../../assests/images/Smallcard1.png";
import card2 from "../../assests/images/Smallcard2.png";
import card3 from "../../assests/images/Smallcard3.png";
import card4 from "../../assests/images/Smallcard4.png";
import client1 from "../../assests/images/client1.png";
import client2 from "../../assests/images/client2.png";
import client3 from "../../assests/images/client3.png";
import client4 from "../../assests/images/client4.png";
import author1 from "../../assests/images/author1.png";
import author2 from "../../assests/images/author2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import "../AboutUs/styles.css";
import Footer from "../../Components/Footer";
import Agents from "../../Components/Agents";
import Testimonials from "../../Components/Testimonials";

const AboutUs = () => {
  const works = [
    {
      id: 1,
      img: image1,
      title: "Choose A Category",
      description:
        "Browse our selection of property categories to find the type of space that fits your needs, whether it’s a cozy home, a professional office, or a spacious commercial property. Our range of options ensures that there’s something for everyone.",
    },
    {
      id: 2,
      img: image2,
      title: "Find Real Estate",
      description:
        "Explore our listings to view detailed property descriptions, photos, and pricing information. Use filters to narrow down your search by location, budget, and property features to discover spaces that match your preferences.",
    },
    {
      id: 3,
      img: image3,
      title: "Take Your Keys",
      description:
        "Once you’ve found the perfect property, we’ll guide you through the paperwork and key handover process with ease. Our team ensures that every step, from contract signing to final inspections, is smooth and transparent.",
    },
    {
      id: 4,
      img: image4,
      title: "Live Happily",
      description:
        "Move into your new space and start building memories! NobleHome is here to make sure you have everything you need to settle in comfortably, whether you’re a homeowner, tenant, or business owner.",
    },
  ];

  return (
    <div className="relative w-full">
      <div className="relative w-full h-[600px]">
        <img
          className="w-full h-full object-cover"
          src={about}
          alt="About Us"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold font-poppins text-center mb-3">
            Your Trusted Partner in Real Estate
          </h1>
          <p className="text-white text-sm font-normal font-poppins text-center">
            Finding the home, commercial, or office you’ll love to rent or buy
            just got easier.
          </p>
        </div>
      </div>

      <div className="relative mx-auto w-[80%] md:w-[70%] lg:w-[80%] xl:w-[50%] mb-20 transform mt-[-10%] p-6 bg-white rounded-xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold font-poppins mb-3">
              To help you find your dream home
            </h1>
            <div>
              <h2 className="text-md font-semibold font-poppins text-[#6F97FF] uppercase">
                Our Vision
              </h2>
              <p className="text-[#535353] mb-5">
                To redefine real estate excellence by creating spaces that
                inspire and uplift. We envision a future where every client
                finds their ideal property seamlessly, with a commitment to
                quality, integrity, and personalized service. At NobleHome, we
                aim to set new standards in the real estate industry, making
                each client’s journey to their dream property an extraordinary
                experience.
              </p>
            </div>

            <div>
              <h2 className="text-md font-semibold font-poppins text-[#6F97FF] uppercase">
                Our Mission
              </h2>
              <p className="text-[#535353]">
                Our mission is to provide exceptional real estate services by
                focusing on our clients’ unique needs and aspirations. We are
                dedicated to building lasting relationships, offering expert
                guidance, and ensuring transparency in every transaction. With a
                passion for quality and a drive for innovation, NobleHome is
                committed to helping individuals and businesses find properties
                that truly reflect their goals and lifestyles.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img
              src={building}
              alt="Building"
              className="w-43 h-auto object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Clients Section */}
        <div className="mt-10 relative rounded-xl p-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="relative">
              <div className="text-5xl font-bold text-[#D4E0FF]">120 +</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-2xl font-normal text-[#535353] uppercase">
                  Available Lands
                </div>
              </div>
            </div>

            <div className="relative border-l-4 border-gray-300 pl-4">
              <div className="text-5xl font-bold text-[#D4E0FF]">205 +</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-2xl font-normal text-[#535353] uppercase">
                  Available House
                </div>
              </div>
            </div>

            <div className="relative border-l-4 border-gray-300 pl-4">
              <div className="text-5xl font-bold text-[#D4E0FF]">92 +</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-2xl font-normal text-[#535353] p-2 uppercase">
                  Happy Clients
                </div>
              </div>
            </div>

            <div className="relative border-l-4 border-gray-300 pl-4">
              <div className="text-5xl font-bold text-[#D4E0FF]">105 +</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-2xl font-normal text-[#535353] uppercase">
                  Sold Properties
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* how it workd */}
      <div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-poppins text-center mb-3 uppercase m-10">
          How it works
        </h1>
        <p className="text-sm font-normal text-[#6F97FF] font-poppins text-center">
          Finding the home, commercial, or office you’ll love to rent or buy
          just got easier.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
          {works.map((work, index) => (
            <div key={work.id} className="relative bg-white text-center pb-5">
              <div className="relative">
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-full h-64 object-contain mb-4 rounded-full"
                />
                <div className="absolute -top-3 -right-2 w-20 h-20 bg-[#9BDCFF] text-black  rounded-full flex items-center justify-center text-2xl font-bold">
                  0{index + 1}
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-2 font-playfair">
                {work.title}
              </h2>
              <p className="text-sm text-gray-600 px-2 mb-4 font-playfair">
                {work.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Agents />

      <Testimonials />

      <Footer />
    </div>
  );
};

export default AboutUs;
