import { useState } from "react";

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
  "Jaffna",
  "Anuradhapura",
  "Ratnapura",
  "Badulla",
  "Matara",
  "Trincomalee",
];

const PropertySearch = ({ onSearch }) => {
  // State for storing filter values
  const [propertyType, setPropertyType] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Handle search click and pass the filters back to the parent
  const handleSearch = () => {
    onSearch({
      propertyType,
      selectedProvince,
      selectedCity,
      minPrice,
      maxPrice,
    });
  };

  return (
    <div className="flex justify-center p-6">
      <div className="rounded-xl border border-gray-300 bg-white p-8 shadow-lg w-full max-w-3xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Search Properties</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <select
            id="property-type"
            className="block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="" disabled>
              Property Type
            </option>
            <option>House</option>
            <option>Land</option>
          </select>

          <select
            id="province"
            className="block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            value={selectedProvince}
            onChange={(e) => setSelectedProvince(e.target.value)}
          >
            <option value="" disabled>
              Province
            </option>
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>

          <select
            id="city"
            className="block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
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

          <div className="flex flex-col">
            <label htmlFor="min-price" className="text-gray-600 text-sm font-medium mb-1">
              Min Sales Price
            </label>
            <input
              type="text"
              id="min-price"
              placeholder="Min Sales Price"
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="max-price" className="text-gray-600 text-sm font-medium mb-1">
 Max Sales Price
            </label>
            <input
              type="text"
              id="max-price"
              placeholder="Max Sales Price"
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>

          <div className="mt-6 flex justify-end">
            <button
              className="active:scale-95 rounded-lg bg-blue-600 px-6 py-2 font-medium text-white outline-none focus:ring hover:opacity-90"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;