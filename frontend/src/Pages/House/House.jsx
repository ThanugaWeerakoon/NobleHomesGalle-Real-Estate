import React, { useState } from 'react';
import properties from './properties'; // Adjust the path as necessary

const PropertiesPage = () => {
  const [propertyType, setPropertyType] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const provinces = [
    "Central Province",
    "Eastern Province",
    "Northern Province",
    "North Central Province",
    "North Western Province",
    "Sabaragamuwa Province",
    "Southern Province",
    "Uva Province",
    "Western Province",
  ];

  const cities = [
    "Colombo",
    "Gampaha",
    "Kandy",
    "Galle",
  ];

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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Properties</h1>
      <div className="mb-6">
        <PropertySearch onSearch={(filters) => {
          setPropertyType(filters.propertyType);
          setSelectedProvince(filters.selectedProvince);
          setSelectedCity(filters.selectedCity);
          setMinPrice(filters.minPrice);
          setMaxPrice(filters.maxPrice);
        }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProperties.map((property) => (
          <div key={property.id} className="border p-4 rounded">
            <img src={property.img} alt={property.town} className="w-full h-48 object-cover mb-2" />
            <h2 className="font-bold">{property.town}</h2>
            <p>{property.province}</p>
            <p>{property.city}</p>
            <p>{property.purches}</p>
            <p>{property.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;