import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Land from "../assests/Home/land.jpg"
import Land1 from "../assests/Home/land1.jpg";
import Land2 from "../assests/Home/land2.jpg";
import House from "../assests/Home/house.jpg";
import House1 from "../assests/Home/house1.jpg";
import House2 from "../assests/Home/house2.jpg";
const OurProperties = () => {
  return (
    <div className="w-full p-6 ">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-poppins text-center uppercase">Our Properties</h1>
        <p className="text-md font-semibold font-poppins text-[#6F97FF] uppercase">Best Properties</p>
      </div>
      <div className="grid grid-cols-1 gap-10 m-10 md:grid-cols-2 lg:grid-cols-3">
        <Card className="w-full">
          <CardHeader
            shadow={false}
            floated={false}
            className="h-96 rounded-lg"
          >
            <img
              src={Land}
              alt="card-image"
              className="h-full w-full object-cover rounded-lg"
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              Southern Province
            </Typography>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                Brand New 2 Storied House for Sale in Galle.
              </Typography>
            </div>
            <div className="flex items-center justify-between">
              <Typography color="blue-gray" className="font-normal">
                4453 sqft
              </Typography>
              <Typography color="blue-gray" className="font-normal">
                05
              </Typography>
              <Typography color="blue-gray" className="font-normal">
                03
              </Typography>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-500 text-white shadow-none hover:bg-blue-600 hover:scale-105 hover:shadow-none focus:bg-blue-600 focus:scale-105 focus:shadow-none active:bg-blue-700 active:scale-100"
            >
              Total Price Rs.55,000,000
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader
            shadow={false}
            floated={false}
            className="h-96 rounded-lg"
          >
            <img
              src={Land1}
              alt="card-image"
              className="h-full w-full object-cover rounded-lg"
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              Southern Province
            </Typography>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                Brand New 2 Storied House for Sale in Galle.
              </Typography>
            </div>
            <div className="flex items-center justify-between">
              <Typography color="blue-gray" className="font-normal">
                4453 sqft
              </Typography>
              <Typography color="blue-gray" className="font-normal">
                05
              </Typography>
              <Typography color="blue-gray" className="font-normal">
                03
              </Typography>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-500 text-white shadow-none hover:bg-blue-600 hover:scale-105 hover:shadow-none focus:bg-blue-600 focus:scale-105 focus:shadow-none active:bg-blue-700 active:scale-100"
            >
              Total Price Rs.55,000,000
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader
            shadow={false}
            floated={false}
            className="h-96 rounded-lg"
          >
            <img
              src={Land2}
              alt="card-image"
              className="h-full w-full object-cover rounded-lg"
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              Southern Province
            </Typography>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                Brand New 2 Storied House for Sale in Galle.
              </Typography>
            </div>
            <div className="flex items-center justify-between">
              <Typography color="blue-gray" className="font-normal">
                4453 sqft
              </Typography>
              <Typography color="blue-gray" className="font-normal">
                05
              </Typography>
              <Typography color="blue-gray" className="font-normal">
                03
              </Typography>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-500 text-white shadow-none hover:bg-blue-600 hover:scale-105 hover:shadow-none focus:bg-blue-600 focus:scale-105 focus:shadow-none active:bg-blue-700 active:scale-100"
            >
              Total Price Rs.55,000,000
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader
            shadow={false}
            floated={false}
            className="h-96 rounded-lg"
          >
            <img
              src={House}
              alt="card-image"
              className="h-full w-full object-cover rounded-lg"
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              Southern Province
            </Typography>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                Brand New 2 Storied House for Sale in Galle.
              </Typography>
            </div>
            <div className="flex items-center justify-between">
              <Typography color="blue-gray" className="font-normal">
                4453 sqft
              </Typography>
              <Typography color="blue-gray" className="font-normal">
                05
              </Typography>
              <Typography color="blue-gray" className="font-normal">
                03
              </Typography>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-500 text-white shadow-none hover:bg-blue-600 hover:scale-105 hover:shadow-none focus:bg-blue-600 focus:scale-105 focus:shadow-none active:bg-blue-700 active:scale-100"
            >
              Total Price Rs.55,000,000
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader
            shadow={false}
            floated={false}
            className="h-96 rounded-lg"
          >
            <img
              src={House1}
              alt="card-image"
              className="h-full w-full object-cover rounded-lg"
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              Southern Province
            </Typography>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                Brand New 2 Storied House for Sale in Galle.
              </Typography>
            </div>
            <div className="flex items-center justify-between">
              <Typography color="blue-gray" className="font-normal">
                4453 sqft
              </Typography>
              <Typography color="blue-gray" className="font-normal">
                05
              </Typography>
              <Typography color="blue-gray" className="font-normal">
                03
              </Typography>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-500 text-white shadow-none hover:bg-blue-600 hover:scale-105 hover:shadow-none focus:bg-blue-600 focus:scale-105 focus:shadow-none active:bg-blue-700 active:scale-100"
            >
              Total Price Rs.55,000,000
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader
            shadow={false}
            floated={false}
            className="h-96 rounded-lg"
          >
            <img
              src={House2}
              alt="card-image"
              className="h-full w-full object-cover rounded-lg"
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              Southern Province
            </Typography>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                Brand New 2 Storied House for Sale in Galle.
              </Typography>
            </div>
            <div className="flex items-center justify-between">
              <Typography color="blue-gray" className="font-normal">
                4453 sqft
              </Typography>
              <Typography color="blue-gray" className="font-normal">
                05
              </Typography>
              <Typography color="blue-gray" className="font-normal">
                03
              </Typography>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-500 text-white shadow-none hover:bg-blue-600 hover:scale-105 hover:shadow-none focus:bg-blue-600 focus:scale-105 focus:shadow-none active:bg-blue-700 active:scale-100"
            >
              Total Price Rs.55,000,000
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default OurProperties;
