import React from 'react'
import author1 from "../assests/images/author1.png";
import author2 from "../assests/images/author2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials = () => {
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
  )
}

export default Testimonials