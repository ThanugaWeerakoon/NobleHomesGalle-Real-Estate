import React, { useState } from "react";
import home from "../../assests/Home/home.jpg";
import house from "../../assests/Home/house.jpg";
import house1 from "../../assests/Home/house1.jpg";
import house2 from "../../assests/Home/house2.jpg";
import land from "../../assests/Home/land.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useParams } from 'react-router-dom';
import Streetview from "../Itempage/Streetview";
import OurProperties from "./OurProperties";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBed,
  faShower,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Components/Footer";

export default function HouseItem() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const { id } = useParams();
  return (
    <div>
      {/* <div className="mx-10">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={home} alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={house} alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={house1} alt="Slide 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={house2} alt="Slide 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={land} alt="Slide 5" />
          </SwiperSlide>
        </Swiper>
      </div> */}
<div className="mx-10 mt-10">
  <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    pagination={{ clickable: true }}
    navigation={true}
    loop={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
  >
    <SwiperSlide>
      <img src={home} alt="Slide 1" className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={house} alt="Slide 2" className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={house1} alt="Slide 3" className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={house2} alt="Slide 4" className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={land} alt="Slide 5" className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover" />
    </SwiperSlide>
  </Swiper>
</div>
      <h2 className="lg:px-10 mt-20 font-poppin text-1xl font-bold tracking-tight text-black sm:text-2xl sm:leading-none">
        COLOMBO, SRI LANKA
      </h2>

      <div className="lg:px-10 text-left">
        <h2 className="mt-10 font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
          Modern House for your Family
        </h2>
      </div>

      <div className="lg:px-10 lg:py-5">
        <h2 className="mt-6 font-sans text-1xl font-small tracking-tight text-[#7B7B7B] sm:text-2xl leading-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque
          penatibus et magnis dis parturient montes. Ut sem viverra aliquet eget
          sit amet tellus cras adipiscing. Aliquam eleifend mi in nulla posuere
          sollicitudin aliquam ultrices sagittis.
        </h2>
      </div>

      <h2 className="lg:px-10 mt-25 font-poppin text-1xl font-bold tracking-tight text-[#7B7B7B] sm:text-2xl sm:leading-none">
        <span>
          <b className="text-black">Address </b>
        </span>
        : 357/B1, Colombo Road, Thalawathugoda
      </h2>

      <h2 className="lg:px-10 mt-28 font-poppin text-1xl font-bold tracking-tight text-[#083199] sm:text-2xl sm:leading-none">
        <span>
          <b>Rs 55,000,000 TOTAL PRICE</b>
        </span>
      </h2>

      <div className="lg:px-10 mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="flex items-center relative">
          <FontAwesomeIcon icon={faHome} size="2x" className="text-[#083199]" />
          <span className="ml-5 text-black">4453 sqft</span>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <span className="text-[#083199]">|</span>
          </div>
        </div>
        <div className="flex items-center relative">
          <FontAwesomeIcon icon={faBed} size="2x" className="text-[#083199]" />
          <span className="ml-5 text-black">05</span>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <span className="text-[#083199]">|</span>
          </div>
        </div>
        <div className="flex items-center relative">
          <FontAwesomeIcon
            icon={faShower}
            size="2x"
            className="text-[#083199]"
          />
          <span className="ml-5 text-black">03</span>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <span className="text-[#083199] ">|</span>
          </div>
        </div>
        <div className="flex items-center relative">
          <FontAwesomeIcon icon={faCar} size="2x" className="text-[#083199]" />
          <span className="ml-5 text-black">02</span>
        </div>
      </div>

      <h2 className="lg:px-10 mt-20 font-poppin text-1xl font-bold tracking-tight text-black sm:text-3xl sm:leading-none">
        Description
      </h2>

      <div className="lg:px-10 lg:py-5 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <h2 className="mt-6 font-sans text-1xl font-small tracking-tight text-[#7B7B7B] sm:text-2xl leading-5">
              About 500m to Thalawathugoda - Kotte main route. (Madiwela Kotte
              near the Parliament and the Sri Jayawardenapura Hospital) Calm and
              peaceful living area, good neighborhood. There is a single-store
              usable house, but the price will consider only the land value.
              <br />
              <br />
              The single-store house includes:
              <br />
              * Large Garden area
              <br />
              * Large Tiled Veranda
              <br />
              * Large Living area
              <br />
              * Dining Room with a Courtyard
              <br />
              * Another Small Dining Room with a Pantry Cupboard
              <br />
              * A/C Master Bedroom with attached Bathroom
              <br />
              * Kitchen with Pantry Cupboards
              <br />
              * Wet Kitchen
              <br />
              * Property fully Covered by a Parapet Wall
              <br />
              * Electricity and Pipe-born Water
              <br />
              * Wide Carpeted Road Access
              <br />
              <br />
              BERYL will provide you with personalized, trustworthy service at
              all times.
            </h2>
          </div>

          <div className=" justify-center items-center">
            <div className="flex flex-col bg-[#EBF5F5] w-full max-w-2xl rounded-lg p-6">
              <h2 className="text-left font-roboto text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-black mb-4">
                Reach the Agent
              </h2>
              <div className="flex flex-col sm:flex-row items-center sm:items-start">
                <img
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
                  src={home}
                  alt="Agent"
                />
                <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col text-center sm:text-left">
                  <h2 className="font-poppins text-lg md:text-xl lg:text-2xl font-medium tracking-tight text-black">
                    Andy Doe
                  </h2>
                  <h2 className="mt-1 font-poppins text-base md:text-lg lg:text-xl font-medium tracking-tight text-black">
                    +0361 234 567
                  </h2>
                  <h2 className="mt-1 font-poppins text-base md:text-lg lg:text-xl font-medium tracking-tight text-black">
                    mail@costumer.com
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Streetview />
      <OurProperties />
      <Footer />

      <div className="flex flex-col lg:flex-row justify-between items-start lg:space-x-10 mt-10">
        <div className="w-full lg:w-1/2"></div>
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0"></div>
      </div>
    </div>
  );
}
