/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

const PropertySearch = ({ onSearch, cityList, setCityList }) => {
  const [propertyType, setPropertyType] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [newCity, setNewCity] = useState("");

  const handleSearch = () => {
    onSearch({ propertyType, selectedCity });
  };

  return (
    <div className="flex justify-center p-6">
      <div className="rounded-xl border border-gray-300 bg-white p-8 shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Search Properties
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <select
            id="property-type"
            className="block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="" disabled>
              Property Type
            </option>
            <option value="house">House</option>
            <option value="land">Land</option>
          </select>

          <select
            id="city"
            className="block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="" disabled>
              City
            </option>
            {cityList.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-6 flex justify-end gap-5">
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-6 py-3 rounded-md"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;
