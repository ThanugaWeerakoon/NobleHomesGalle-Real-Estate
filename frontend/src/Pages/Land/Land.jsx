import React, { useState } from 'react';
import properties from '../../data/properties'; // Adjust the path as necessary
import PropertySearch from '../../Components/PropertySearch'; // Adjust the path as necessary
import heroImage from '../../assests/Land/Hero.png';

const Land = () => {
  const [propertyType, setPropertyType] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {
    const filteredProperties = properties.filter((property) => {
      const priceValue = parseInt(property.price.replace(/[^\d]/g, ''), 10); // Convert price to number

      const matchesPropertyType = propertyType ? property.propertyType === propertyType : true;
      const matchesProvince = selectedProvince ? property.province === selectedProvince : true;
      const matchesCity = selectedCity ? property.city === selectedCity : true;
      const matchesMinPrice = minPrice ? priceValue >= parseInt(minPrice.replace(/[^\d]/g, ''), 10) : true;
      const matchesMaxPrice = maxPrice ? priceValue <= parseInt(maxPrice.replace(/[^\d]/g, ''), 10) : true;

      return (
        matchesPropertyType &&
        matchesProvince &&
        matchesCity &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });

    return filteredProperties;
  };

  const filteredProperties = handleSearch();

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto relative z-10 p-6 text-white">
        <h1 className="text-4xl font-bold mb-6 text-center">Properties for Sale</h1>
        <div className="mb-6">
          <PropertySearch onSearch={(filters) => {
            setPropertyType(filters.propertyType);
            setSelectedProvince(filters.selectedProvince);
            setSelectedCity(filters.selectedCity);
            setMinPrice(filters.minPrice);
            setMaxPrice(filters.maxPrice);
          }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <div key={property.id} className="border border-gray-300 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 bg-white">
                <img src={property.img} alt={property.town} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="font-semibold text-lg text-gray-800">{property.town}</h2>
                  <p className="text-gray-600">{property.province}, {property.city}</p>
                  <p className="text-gray-500">{property.purches}</p>
                  <p className="font-bold text-blue-600">{property.price}</p>
                  <div className="mt-4">
                    <button
                      className="w-full bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700 transition duration-200"
                      onClick={() => alert(`Viewing details for ${property.town}`)} // Replace this with your navigation logic
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-200">
              <p>No properties found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Land;