import React, { useState } from "react";

const PropertySearch = ({ onSearch }) => {
  const [propertyType, setPropertyType] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const cities = [
    "Colombo",
    "Gampaha",
    "Kandy",
    "Galle",
    "Jaffna",
    "Anuradhapura",
    "Ratnapura",
    "Badulla",
    "Matara",
    "Trincomalee",
    "Weligama",
    "Mirissa",
    "Tangalle",
    "Dickwella",
    "Udugama",
    "Akuressa",
    "Deniyaya",
    "Hikkaduwa",
    "Bentota",
    "Peradeniya",
    "Pilimathalawa",
    "Katugastota",
    "Gampola",
    "Matale",
    "Kegalle",
  ];

  const handleSearch = () => {
    onSearch({
      propertyType: propertyType.trim().toLowerCase(),
      selectedCity: selectedCity.trim().toLowerCase(),
    });
  };

  return (
    <div className="flex justify-center p-6">
      <div className="rounded-xl border border-gray-300 bg-white p-8 shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Search Properties
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Property Type Filter */}
          <select
            id="property-type"
            className="block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 ease-in-out"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="" disabled>
              Property Type
            </option>
            <option value="house">House</option>
            <option value="land">Land</option>
          </select>

          {/* City Filter */}
          <select
            id="city"
            className="block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 ease-in-out"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="" disabled>
              City
            </option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <div className="mt-6 flex justify-end">
          <button
            className="active:scale-95 rounded-lg bg-blue-600 px-6 py-3 font-bold text-white outline-none focus:ring hover:opacity-90 transition duration-200 ease-in-out"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;
