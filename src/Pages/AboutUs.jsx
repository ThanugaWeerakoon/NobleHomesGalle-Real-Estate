import about from "../assests/images/abountBG.png";
import image1 from "../assests/images/Ellipse1.png";
import image2 from "../assests/images/Ellipse2.png";
import image3 from "../assests/images/Ellipse3.png";
import image4 from "../assests/images/Ellipse4.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Pages/styles.css";
import Footer from "../Components/Footer";
import Agents from "../Components/Agents";
import Testimonials from "../Components/Testimonials";
import Dream from "../Components/Dream";

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
      <Dream />
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

      

      <Footer />
    </div>
  );
};

export default AboutUs;
