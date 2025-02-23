import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase"; // Firebase Firestore config
import { doc, getDoc } from "firebase/firestore";
import defaultVideo from "../assests/video/sample.mp4"; // Default video for properties without videos

const PropertyDetails = () => {
  const { propertyId } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mainMedia, setMainMedia] = useState(""); // State to hold the currently selected main media
  const [isVideo, setIsVideo] = useState(false); // State to check if the main media is a video

  // Fetch property data from Firebase
  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const propertyDoc = doc(db, "homes", propertyId);
        const docSnap = await getDoc(propertyDoc);

        if (docSnap.exists()) {
          const propertyData = docSnap.data();
          setProperty({
            ...propertyData,
            videoUrls: propertyData.videoUrls || [],
            imageUrls: propertyData.imageUrls || [],
          });

          // Check if there are video URLs
          if (propertyData.videoUrls && propertyData.videoUrls.length > 0) {
            setMainMedia(propertyData.videoUrls[0]);
            setIsVideo(true);
          } else if (
            propertyData.imageUrls &&
            propertyData.imageUrls.length > 0
          ) {
            setMainMedia(propertyData.imageUrls[0]);
            setIsVideo(false);
          }
        } else {
          setError("Property not found!");
        }
      } catch (err) {
        console.error("Error fetching property details:", err);
        setError("Error fetching property details!");
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyDetails();
  }, [propertyId]);

  if (loading) {
    return (
      <div className="text-center text-gray-600 text-2xl font-semibold">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 text-2xl font-semibold">
        {error}
      </div>
    );
  }

  if (!property) {
    return (
      <div className="text-center text-red-600 text-2xl font-semibold">
        Property not found!
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto p-8 md:p-12 bg-white shadow-xl rounded-lg mt-8 space-y-10">
      {/* Property Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
        {property.title}
      </h1>

      {/* Main Media Display */}
      <div className="mb-12 rounded-lg overflow-hidden shadow-2xl">
        {isVideo ? (
          <video
            src={mainMedia}
            controls
            className="w-full h-[500px] object-cover rounded-lg"
          />
        ) : (
          <img
            src={mainMedia || "/default-image.jpg"}
            alt="Main Property"
            className="w-full h-[500px] object-cover rounded-lg"
          />
        )}
      </div>

      {/* Thumbnail Images and Videos */}
      <div className="flex space-x-4 mb-12">
        {property.videoUrls &&
          property.videoUrls.length > 0 &&
          property.videoUrls.map((video, index) => (
            <video
              key={index}
              src={video}
              className="w-24 h-24 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-blue-500"
              onClick={() => {
                setMainMedia(video);
                setIsVideo(true);
              }}
            />
          ))}
        {property.imageUrls &&
          property.imageUrls.length > 0 &&
          property.imageUrls.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-24 h-24 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-blue-500"
              onClick={() => {
                setMainMedia(image);
                setIsVideo(false);
              }}
            />
          ))}
      </div>

      {/* Property Description */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
          Property Description
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          {property.description}
        </p>
      </div>

      {/* Property Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Property Information
          </h3>
          <ul className="space-y-3 text-lg text-gray-700">
            <li>
              <strong>Address:</strong> {property.address}
            </li>
            <li>
              <strong>City:</strong> {property.city}
            </li>
            <li>
              <strong>Town:</strong> {property.town}
            </li>
            <li>
              <strong>Price:</strong> Rs {property.price.toLocaleString()}.00
            </li>
            <li>
              <strong>Bathrooms:</strong> {property.bathrooms}
            </li>
            <li>
              <strong>Bedrooms:</strong> {property.bedrooms}
            </li>
            <li>
              <strong>Floor Area:</strong> {property.floorArea} sqft
            </li>
            <li>
              <strong>Furnished Status:</strong> {property.furnishedStatus}
            </li>
            <li>
              <strong>Age of Building:</strong> {property.ageOfBuilding}
            </li>
            <li>
              <strong>Parking Space:</strong> {property.parkingSpace} vehicles
            </li>
            <li>
              <strong>Land Size:</strong> {property.perches} {property.landUnit}
            </li>
            <li>
              <strong>No of Floors:</strong> {property.noOfFloors}
            </li>
            <li>
              <strong>Road Width:</strong> {property.roadWidth} feet
            </li>
          </ul>
        </div>

        {/* Property Features */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Property Features
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            {property.propertyFeatures &&
              property.propertyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
          </ul>
        </div>
      </div>

      {/* Map Link */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Location</h3>
        <a
          href={property.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline transition-all"
        >
          View on Google Maps
        </a>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg mb-12">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
          Contact Information
        </h3>
        <p className="text-lg text-gray-700">
          For more information, please contact our real estate agent.
        </p>
        <p className="text-lg text-gray-700 mt-2">
          <strong>Agent:</strong> {property.agentName || "Thilak Gallage"}
        </p>
        <p className="text-lg text-gray-700">
          <strong>Phone:</strong> {property.agentPhone || "94-778354380"}
        </p>
      </div>

      {/* Action Button */}
      <div className="text-center mb-12">
        <button
          onClick={() => window.history.back()}
          className="bg-blue-600 text-white py-4 px-10 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transform transition-all duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PropertyDetails;
