import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../../firebase';  // Import the Firestore instance
import PropertySearch from '../../Components/PropertySearch';
import Footer from "../../Components/Footer";

const Land = () => {
  const [properties, setProperties] = useState([]);
  const [propertyType, setPropertyType] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const navigate = useNavigate();

  
  const fetchProperties = async () => {
    try {
      const propertiesCollection = collection(db, "homes");
      const propertySnapshot = await getDocs(propertiesCollection);
      const propertyList = propertySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProperties(propertyList);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

 
  const handleSearch = () => {
    return properties.filter((property) => {
      const priceValue = property.price || 0; 

      const matchesPropertyType = propertyType ? property.propertyType === propertyType : true;
      const matchesProvince = selectedProvince ? property.province === selectedProvince : true;
      const matchesCity = selectedCity ? property.city === selectedCity : true;
      const matchesMinPrice = minPrice ? priceValue >= parseInt(minPrice) : true;
      const matchesMaxPrice = maxPrice ? priceValue <= parseInt(maxPrice) : true;

      return (
        matchesPropertyType &&
        matchesProvince &&
        matchesCity &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });
  };

  const filteredProperties = useMemo(() => handleSearch(), [properties, propertyType, selectedProvince, selectedCity, minPrice, maxPrice]);

  // Function to handle "View More" button click
  const handleViewMore = (propertyId) => {
    navigate(`/property/${propertyId}`);
  };

  return (
    <div className="mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-black mt-9">Properties for Sale</h1>
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
              <img src={property.imageUrls ? property.imageUrls[0] : '/default-image.jpg'} alt={property.town} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="font-semibold text-lg text-gray-800">{property.town}</h2>
                <p className="text-gray-600">{property.city}</p>
                <p className="font-bold text-blue-600">{property.price ? `$${property.price.toLocaleString()}` : "Price not available"}</p>
                <button
                  onClick={() => handleViewMore(property.id)} 
                  className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                >
                  View More
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-500">
            <p>No properties found matching your criteria.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Land;
