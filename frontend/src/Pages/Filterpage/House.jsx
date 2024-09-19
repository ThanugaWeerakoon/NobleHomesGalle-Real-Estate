import React, { useState } from "react";
import hero from "../../assests/Filter/bg.png";
import { FaHome, FaBed, FaBath } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import PropertySearch from "../../Components/PropertySearch";
import img1 from "../../assests/Filter/house1.png";
import img2 from "../../assests/Filter/house2.png";
import img3 from "../../assests/Filter/house3.png";
import img4 from "../../assests/Filter/house4.png";

const House = () => {
  const allProperties = [
    {
      img: img1,
      propertyType: "House",
      province: "Eastern Province",
      town: "Brand New 2 Storied House for Sale in Galle",
      purches: "4453 sqft",
      beds: "05",
      bathrooms: "04",
      price: 35000000,
      city: "Galle",
    },
    {
      img: img2,
      propertyType: "House",
      province: "Northern Province",
      town: "Luxury Brand New 2 Story Houses in Matara",
      purches: "8453 sqft",
      beds: "06",
      bathrooms: "06",
      price: 75000000,
      city: "Matara",
    },
    {
      img: img3,
      propertyType: "House",
      province: "North Western Province",
      town: "Brand New 3 Storied House for Sale in Ella",
      purches: "1453 sqft",
      beds: "04",
      bathrooms: "05",
      price: 50000000,
      city: "Ella",
    },
    {
      img: img4,
      propertyType: "House",
      province: "Western Province",
      town: "3 Story House for Sale in Dangedara 10",
      purches: "653 sqft",
      beds: "05",
      bathrooms: "05",
      price: 50000000,
      city: "Colombo",
    },
  ];

  const [filteredProperties, setFilteredProperties] = useState(allProperties);

  const handleSearch = (searchFilters) => {
    const { propertyType, selectedProvince, selectedCity, minPrice, maxPrice } =
      searchFilters;

    const minPriceNum = minPrice ? parseInt(minPrice) : 0;
    const maxPriceNum = maxPrice ? parseInt(maxPrice) : Number.MAX_SAFE_INTEGER;

    const filtered = allProperties.filter((property) => {
      return (
        (propertyType === "" || property.propertyType === propertyType) &&
        (selectedProvince === "" || property.province === selectedProvince) &&
        (selectedCity === "" || property.city === selectedCity) &&
        property.price >= minPriceNum &&
        property.price <= maxPriceNum
      );
    });

    setFilteredProperties(filtered);
  };

  return (
    <div className="">
      {/* Hero Section */}
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>

        <div className="px-4 py-16 mx-auto w-full sm:px-24 lg:px-8 lg:py-20">
          <div className="relative w-full max-w-2xl mx-auto text-center">
            {/* Adjust margin to move the heading and paragraph up */}
            <h2 className="mt-10 font-sans text-4xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none ">
              Transform Your Dreams into
              <br className="hidden md:block" />
              Reality with our Land Options.
            </h2>

            {/* Add more margin at the bottom to increase spacing */}
            <p className="mb-8 text-base text-white md:text-lg mt-4">
              Finding the home, commercial, or office you’ll love to rent or buy
              just got easier.
            </p>

            {/* Increase margin-top for more spacing between the paragraph and the scroll button */}
            <a
              href="/"
              aria-label="Scroll down"
              className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110 mt-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* PropertySearch Component */}
        <PropertySearch onSearch={handleSearch} />
      </div>

      {/* Display Filtered Properties */}
      <div className="m-20">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-1xl md:text-4xl lg:text-5xl font-semibold font-poppins text-center mb-3 uppercase m-10">
            Our Houses
          </h1>
          <p className="text-m font-normal font-poppins text-[#6F97FF] text-center mb-10">
            Best Properties
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property, index) => (
              <Card className="w-full rounded-2xl p-2" key={index}>
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="relative h-96 rounded-[1.5rem]"
                >
                  <img
                    src={property.img}
                    alt={`${property.town} image`}
                    className="h-full w-full object-cover rounded-lg"
                  />
                  <div className="absolute top-2 right-2 bg-white text-black px-2 py-1 text-sm font-semibold rounded-lg">
                    Popular
                  </div>
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="small"
                    color="gray"
                    className="opacity-75 font-semibold mb-2"
                  >
                    {property.province}
                  </Typography>
                  <div className="mb-2 flex items-center justify-between">
                    <Typography
                      color="blue-gray"
                      className="!text-2xl !font-semibold mb-2"
                    >
                      {property.town}
                    </Typography>
                  </div>

                  <hr className="border-t-2 border-[#E5E5E5] mb-4" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FaHome className="mr-3 text-[#69727D]" />
                      <Typography
                        color="blue-gray"
                        className="font-normal text-[#69727D]"
                      >
                        {property.purches}
                      </Typography>

                      <div className="mx-3 h-5 border-[1.3px] border-[#69727D]"></div>

                      <FaBed className="mr-3 text-[#69727D]" />
                      <Typography
                        color="blue-gray"
                        className="font-normal text-[#69727D]"
                      >
                        {property.beds}
                      </Typography>

                      <div className="mx-3 h-5 border-[1.3px] border-[#69727D]"></div>

                      <FaBath className="mr-3 text-[#69727D]" />
                      <Typography
                        color="blue-gray"
                        className="font-normal text-[#69727D]"
                      >
                        {property.bathrooms}
                      </Typography>
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="p-3 bg-blue-500 text-white shadow-none hover:bg-blue-600 hover:scale-105 hover:shadow-lg"
                  >
                    Rs {property.price.toLocaleString()}
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <p>No properties found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default House;
