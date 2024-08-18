import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const OurProperties = () => {
  return (
    <div className="w-full ">
        <div className=" items-center">
        <h1 className="items-center">Our Prooperties</h1>
        <p> Best Properties</p>
        </div>
        <div className="flex items-center justify-between m-10">
        <Card className="w-96">
          <CardHeader shadow={false} floated={false} className="h-96">
            <img
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
              alt="card-image"
              className="h-full w-full object-cover"
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
              {/* <Typography color="blue-gray" className="font-medium">
                $95.00
              </Typography> */}
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
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              Total Price  Rs.55,000,000
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-96">
          <CardHeader shadow={false} floated={false} className="h-96">
            <img
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                Apple AirPods
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                $95.00
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              With plenty of talk and listen time, voice-activated Siri access,
              and an available wireless charging case.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              Total Price  Rs.55,000,000
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-96">
          <CardHeader shadow={false} floated={false} className="h-96">
            <img
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                Apple AirPods
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                $95.00
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              With plenty of talk and listen time, voice-activated Siri access,
              and an available wireless charging case.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              Total Price  Rs.55,000,000
            </Button>
          </CardFooter>
        </Card>
      </div>
      </div>
  );
};

export default OurProperties;
