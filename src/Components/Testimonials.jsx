import React from "react";
import author1 from "../assests/images/author1.png";
import author2 from "../assests/images/author2.png";
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css"; 
import "swiper/css/pagination"; 
import { Pagination } from "swiper/modules"; 
import { Autoplay } from "swiper/modules"; 


const Testimonials = () => {
  const testimonials = [
    {
      text: "We had a fantastic experience with Ashan! He made our family feel like royalty. We'll cherish these memories forever.",
      author: "Sarah, CEO of TechCorp",
      authorImage: author1,
      designation: "CEO, Tech Innovations Inc.",
    },
    {
      text: "We are so grateful to Ashan for the beautiful photos! These memories will be treasured for years to come.",
      author: "Emma & John",
      authorImage: author2,
      designation: "Project Manager, Global Enterprises",
    },
    {
      text: "Ashan's creativity and attention to detail were evident in every shot. He captured our special day perfectly, with stunning results.",
      author: "Michael & Laura",
      authorImage: author1,
      designation: "CEO, Tech Innovations Inc.",
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-3xl md:text-5xl font-semibold font-poppins text-center mb-3 uppercase text-[#333]">
        Testimonials
      </h1>
      <p className="text-md font-normal font-poppins text-[#6F97FF] text-center mb-10">
        What our customers are saying.
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
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-lg p-6 m-4 relative flex flex-col items-start transition-transform duration-300 hover:scale-105">
                  <div className="flex flex-col sm:flex-row items-start mb-4">
                    <div className="w-16 h-16 mb-3 sm:mb-0 sm:mr-3 flex items-center justify-center rounded-full overflow-hidden border-2 border-[#6F97FF]">
                      <img
                        src={testimonial.authorImage}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-lg title-font font-semibold text-[#333] mb-1">
                        {testimonial.author}
                      </h2>
                      <div className="flex text-yellow-500 mb-1">⭐⭐⭐⭐⭐</div>
                      <p className="text-sm text-[#666] mb-3 font-poppins font-normal">
                        <strong>{testimonial.designation}</strong>
                      </p>
                    </div>
                  </div>
                  <p className="text-base font-poppins text-[#444] italic">
                    "{testimonial.text}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;