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
    return <div className="text-center text-red-500 text-xl">Property not found!</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
   
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{property.town}</h1>

   
      <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
        <Swiper
          spaceBetween={10} 
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
                  className="w-full h-80 object-cover rounded-lg"
                />
              </SwiperSlide>
            ))
          ) : (
            <div>No images available</div> 
          )}
        </Swiper>
      </div>

     
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Property Description</h3>
        <p className="text-lg text-gray-600">{details.description}</p>
      </div>

      
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600">
          {details.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Contact Information</h3>
        <p className="text-lg text-gray-600">{details.contactInfo}</p>
        <p className="text-lg text-gray-600">Agent: {details.agentName}</p>
        <p className="text-lg text-gray-600">Phone: {details.agentPhone}</p>
      </div>

     
      <div className="text-center">
        <button
          onClick={() => window.history.back()}
          className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PropertyDetails;
