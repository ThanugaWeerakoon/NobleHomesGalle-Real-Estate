
import hero from "../../assests/Land/Hero.png";
import img1 from "../../assests/Land/land1.jpeg";
import img2 from "../../assests/Land/land2.jpeg";
import img3 from "../../assests/Land/land3.jpeg";
import img4 from "../../assests/Land/land4.png";
import img5 from "../../assests/Land/land5.png";
import img6 from "../../assests/Land/land6.jpeg";
import { FaHome } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import PropertySearch from "../../Components/PropertySearch";
const OurProperties = () => {
  const properties = [
    {
      img: img1,
      province: "Southern Province",
      town: "21 Acres Perches Land for Sale in Ella",
      purches: "15 Purches",
      price: "Rs.55,000,000",
    },
    {
      img: img2,
      province: "Western Province",
      town: "Malabe Town - Land for Sale",
      purches: "10 Purches",
      price: "Rs.65,000,000",
    },
    {
      img: img3,
      province: "Central Province",
      town: "19.55 Perches Land for Sale in Madiwela",
      purches: "12 Purches",
      price: "Rs.45,000,000",
    },

  ];

  return (
    <div>
     

      <div className="m-10">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-1xl md:text-4xl lg:text-5xl font-semibold font-poppins text-center mb-3 uppercase m-10">
            More Properties
          </h1>
          <p className="text-m font-normal font-poppins text-[#6F97FF] text-center mb-10">
            Best Properties
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <Card className="w-full rounded-2xl" key={index}>
              <CardHeader
                shadow={false}
                floated={false}
                className="relative h-96 rounded-lg"
              >
                <img
                  src={property.img}
                  alt={`${property.town} image`}
                  className="h-full w-full object-cover rounded-lg"
                />
                {/* Popular text */}
                <div className="absolute top-2 right-2  bg-white text-black px-2 py-1 text-sm font-semibold rounded-lg">
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
                    Land for Sale in {property.town}
                  </Typography>
                </div>

                <hr className="border-t-2 border-[#E5E5E5] mb-4" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaHome className="mr-2 text-[#69727D]" />
                    <Typography color="blue-gray" className="font-normal">
                      {property.purches}
                    </Typography>
                  </div>
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <Button
                  ripple={false}
                  fullWidth={true}
                  className="p-3 bg-blue-500 text-white shadow-none hover:bg-blue-600 hover:scale-105 hover:shadow-none focus:bg-blue-600 focus:scale-105 focus:shadow-none active:bg-blue-700 active:scale-100 rounded-none normal-case flex items-center justify-center"
                >
                  <div className="flex flex-col items-center sm:flex-row sm:items-center">
                    <span className="text-base sm:text-lg">Total Price</span>
                    <span className="text-2xl sm:ml-2 sm:mt-0 mt-1">
                      {property.price}
                    </span>
                  </div>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-20 relative">
          {/* Full-width Horizontal Line */}
          <hr className="border-t-2 border-[#8B8B8B] w-full" />
          {/* Centered Button */}
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
            <Button className="bg-[#424242] text-white rounded-full px-6 py-2 text-sm ">
              See All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurProperties