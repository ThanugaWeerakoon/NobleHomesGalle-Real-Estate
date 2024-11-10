import React from 'react';
import { useParams } from 'react-router-dom';
import properties from '../data/data';  // Import properties data
import propertyDetails from '../properties';  // Import detailed data

const PropertyDetails = () => {
  const { propertyId } = useParams();  // Get property ID from URL

  // Find the matching property in the properties data
  const property = properties.find((prop) => prop.id === parseInt(propertyId));
  
  // Find the matching detailed info in the propertyDetails data
  const details = propertyDetails.find((detail) => detail.id === parseInt(propertyId));

  // If the property or details do not exist, show an error
  if (!property || !details) {
    return <div>Property not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{property.town}</h1>
      <img src={property.img} alt={property.town} className="w-full h-80 object-cover mb-6" />

      <div>
        <h3 className="text-lg font-semibold">Property Description</h3>
        <p>{details.description}</p>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Features</h3>
        <ul>
          {details.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Contact Information</h3>
        <p>{details.contactInfo}</p>
        <p>Agent: {details.agentName}</p>
        <p>Phone: {details.agentPhone}</p>
      </div>
    </div>
  );
};

export default PropertyDetails;
