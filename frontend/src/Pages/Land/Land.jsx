import React, { useState } from 'react';
import properties from '../../data/properties'; 
import PropertySearch from '../../Components/PropertySearch';
import Footer from "../../Components/Footer"
const Land = () => {
  const [propertyType, setPropertyType] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {
    const filteredProperties = properties.filter((property) => {
      const priceValue = parseInt(property.price.replace(/[^\d]/g, ''), 10); 

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
    <div className="mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Properties for Sale</h1>
      <div className="mb-6">
        <PropertySearch onSearch={(filters) => {
          setPropertyType(filters.propertyType);
          setSelectedProvince(filters.selectedProvince);
          setSelectedCity(filters.selectedCity);
          setMinPrice(filters.minPrice);
          setMaxPrice(filters.maxPrice);
        }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-9">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <div key={property.id} className="border border-gray-300 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <img src={property.img} alt={property.town} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="font-semibold text-lg text-gray-800">{property.town}</h2>
                <p className="text-gray-600">{property.province}, {property.city}</p>
                <p className="text-gray-500">{property.purches}</p>
                <p className="font-bold text-blue-600">{property.price}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-500">
            <p>No properties found matching your criteria.</p>
          </div>
        )}
      </div>
      
      <Footer/>
    </div>
    
  );
};

export default Land;