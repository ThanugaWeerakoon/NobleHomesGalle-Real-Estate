import React from "react";
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
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "../AboutUs/styles.css";

const AboutUs = () => {
  const works = [
    {
      id: 1,
      img: image1,
      title: "Choose A Category",
      description: "Quisqu tell us risus adpis viera bibe",
    },
    {
      id: 2,
      img: image2,
      title: "Find Real Estate",
      description: "Quisqu tell us risus adpis viera bibe",
    },
    {
      id: 3,
      img: image3,
      title: "Take Your Keys",
      description: "Quisqu tell us risus adpis viera bibe",
    },
    {
      id: 4,
      img: image4,
      title: "Live Happily",
      description: "Quisqu tell us risus adpis viera bibe",
    },
  ];

  const clients = [
    {
      id: 1,
      img: client1,
      title: "Tom Wilson",
      description: "Marketing",
    },
    {
      id: 2,
      img: client2,
      title: "lilly potter",
      description: " service supporter",
    },
    {
      id: 3,
      img: client3,
      title: "Mukesh ambani",
      description: " agency",
    },
    {
      id: 4,
      img: client4,
      title: "john wick",
      description: "sales",
    },
  ];

  const testimonials = [
    {
      text: "We had a fantastic experience with Ashan! He made our family feel  We'll cherish these memories forever.",
      author: "Sarah, CEO of TechCorp",
      authorImage: author1,
      designation: "CEO, Tech Innovations Inc."
    },
    {
      text: "We are so grateful to Ashan for the beautiful  These photos will be treasured for years to come.",
      author: "Emma & John",
      authorImage: author2,
      designation: "Project Manager, Global Enterprises",
    },
    {
      text: "Ashan's creativity and attention to detail were evident in every shot. He captured our special day perfectly,  results.",
      author: "Michael & Laura",
      authorImage: author1,
      designation: "CEO, Tech Innovations Inc."
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div>
              <h2 className="text-md font-semibold font-poppins text-[#6F97FF] uppercase">
                Our Mission
              </h2>
              <p className="text-[#535353]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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

      {/* latest blog */}
      <div className=" p-5 mx-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-poppins text-center mb-3 uppercase m-10">
          Latest Blog
        </h1>
        <p className="text-sm font-normal text-[#6F97FF] font-poppins text-center mb-10">
          Find Of The Most Popular Real Estate Company All Around Sri Lanka.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="w-full">
            <img
              src={bgCard}
              alt="Main Blog Image"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <img
              src={card1}
              alt="Blog Image 1"
              className="w-full h-auto object-cover rounded-lg"
            />
            <img
              src={card2}
              alt="Blog Image 2"
              className="w-full h-auto object-cover rounded-lg"
            />
            <img
              src={card3}
              alt="Blog Image 3"
              className="w-full h-auto object-cover rounded-lg"
            />
            <img
              src={card4}
              alt="Blog Image 4"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* meet agents */}
      <div className=" p-5 mx-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-poppins text-center mb-3 uppercase m-10">
          Meet our agents
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-white text-center pb-5 shadow-md rounded-lg"
            >
              <img
                src={client.img}
                alt={client.title}
                className="w-full h-64 object-cover mb-4 rounded-md"
              />
              <h2 className="text-2xl font-semibold mb-2 font-playfair">
                {client.title}
              </h2>
              <p className="text-sm text-gray-600 px-2 mb-4 font-playfair">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* testimonials */}
      <div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-poppins text-center mb-3 uppercase m-10">
          TESTIMONIAL
        </h1>
        <p className="text-sm font-normal font-poppins text-[#6F97FF] text-center mb-10">
          What customers are saying.
        </p>
        <div className="flex justify-center items-center">
          <div className="w-full md:w-3/4 lg:w-3/4">
            <Swiper
              centeredSlides={false}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              loop={true}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
              style={{ height: "auto" }}
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
              }}
            >
             
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="  rounded-[40px] shadow-lg p-8 m-4 relative flex flex-col items-start">
                    <div className="flex flex-col sm:flex-row items-start mb-3">
                      <div className="w-20 h-20 mb-3 sm:mb-0 sm:mr-3 flex items-center justify-center rounded-full text-[#8d9887] flex-shrink-0">
                        <img
                          src={testimonial.authorImage}
                          alt={testimonial.author}
                          className="rounded-full"
                          height={70}
                          width={70}
                        />
                      </div>
                      <div className="flex flex-col">
                        <h2 className="text-lg title-font font-medium text-[#8d9887] mb-1">
                          {testimonial.author}
                        </h2>
                        <div className="flex text-yellow-500 mb-1">
                          ⭐⭐⭐⭐⭐
                        </div>
                        <p className="text-sm text-[#939393]  mb-3 font-poppins font-normal">
                          <strong>{testimonial.designation}</strong>
                          <br />
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-base font-poppins">{testimonial.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Next Div */}
      <div className="mt-[60px]">
        {" "}
        {/* Adjust the margin here as needed */}
        <div className="flex justify-center items-center h-[200px] bg-gray-100">
          <p className="text-[#535353] font-poppins">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, id
            sint. Saepe quis deserunt, modi unde error tempore doloribus
            blanditiis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
