import React from 'react';
import { useParams } from 'react-router-dom';
import properties from '../data/data';
import propertyDetails from '../properties';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';  

const PropertyDetails = () => {
  const { propertyId } = useParams();  

  const property = properties.find((prop) => prop.id === parseInt(propertyId));
  const details = propertyDetails.find((detail) => detail.id === parseInt(propertyId));

  if (!property || !details) {
    return <div className="text-center text-red-600 text-2xl font-semibold">Property not found!</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-8 md:p-12 bg-white shadow-lg rounded-lg mt-8">
      {/* Property Title */}
      <h1 className="text-5xl font-extrabold text-gray-900 mb-8">{property.town}</h1>

      {/* Property Images / Slider */}
      <div className="mb-10 rounded-lg overflow-hidden shadow-xl">
        <Swiper
          spaceBetween={15}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={true}
        >
          {details.images.length > 0 ? (
            details.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Property Image ${index + 1}`}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </SwiperSlide>
            ))
          ) : (
            <div className="text-center py-16 text-gray-500">No images available</div>
          )}
        </Swiper>
      </div>

      {/* Property Description */}
      <div className="mb-10">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Property Description</h3>
        <p className="text-lg text-gray-700 leading-relaxed">{details.description}</p>
      </div>

      {/* Property Features */}
      <div className="mb-10">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          {details.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg mb-10">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Contact Information</h3>
        <p className="text-lg text-gray-700">{details.contactInfo}</p>
        <p className="text-lg text-gray-700 mt-2">Agent: {details.agentName}</p>
        <p className="text-lg text-gray-700">Phone: {details.agentPhone}</p>
      </div>

      {/* Action Button */}
      <div className="text-center">
        <button
          onClick={() => window.history.back()}
          className="bg-blue-600 text-white py-4 px-10 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PropertyDetails;