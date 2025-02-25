import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  limit,
  query,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const OurProperties = () => {
  const [properties, setProperties] = useState([]);
  const db = getFirestore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      const propertiesQuery = query(collection(db, "homes"), limit(6));
      const querySnapshot = await getDocs(propertiesQuery);
      const propertiesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProperties(propertiesData);
    };

    fetchProperties();
  }, [db]);

  // Function to handle redirection to the /land page
  const handleRedirect = () => {
    navigate("/land");
  };

  // Utility function for price formatting
  const formatPrice = (price) => {
    return price
      ? `Rs. ${Number(price).toLocaleString()}`
      : "Price not available";
  };

  return (
    <div className="w-full p-6">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-poppins text-center uppercase">
          Our Properties
        </h1>
        <p className="text-md font-semibold font-poppins text-[#6F97FF] uppercase">
          Best Properties
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 m-10 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <Card key={property.id} className="w-full">
            <CardHeader
              shadow={false}
              floated={false}
              className="h-96 rounded-lg"
            >
              <img
                src={property.imageUrls[0]} // Assuming you want to show the first image
                alt="property-image"
                className="h-full w-full object-cover rounded-lg"
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                {property.town}, {property.city}
              </Typography>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">
                  {property.title}
                </Typography>
              </div>
              <div className="flex items-center justify-between">
                <Typography color="blue-gray" className="font-normal">
                  {property.floorArea} sqft
                </Typography>
                <Typography color="blue-gray" className="font-normal">
                  {property.bedrooms} Beds
                </Typography>
                <Typography color="blue-gray" className="font-normal">
                  {property.bathrooms} Baths
                </Typography>
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-black text-white shadow-none hover:bg-blue-600 hover:scale-105 hover:shadow-none focus:bg-blue-600 focus:scale-105 focus:shadow-none active:bg-blue-700 active:scale-100"
                onClick={handleRedirect}
              >
                {formatPrice(property.price)}.00
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OurProperties;
