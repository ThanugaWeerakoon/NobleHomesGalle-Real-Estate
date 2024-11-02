import building from "../assests/images/building.png";

const Dream = () => {
  return (
    <div className="relative mx-auto w-[80%] md:w-[70%] lg:w-[80%] xl:w-[50%] mb-20 transform  p-6 bg-white rounded-xl shadow-lg">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold font-poppins mb-3">
          To help you find your dream home
        </h1>
        <div>
          <h2 className="text-md font-semibold font-poppins text-[#6F97FF] uppercase">
            Our Vision
          </h2>
          <p className="text-[#535353] mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div>
          <h2 className="text-md font-semibold font-poppins text-[#6F97FF] uppercase">
            Our Mission
          </h2>
          <p className="text-[#535353]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img
          src={building}
          alt="Building"
          className="w-43 h-auto object-cover rounded-xl"
        />
      </div>
    </div>

    {/* Clients Section */}
    <div className="mt-10 relative rounded-xl p-5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
        <div className="relative">
          <div className="text-5xl font-bold text-[#D4E0FF]">120 +</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-2xl font-normal text-[#535353] uppercase">
              Available Lands
            </div>
          </div>
        </div>

        <div className="relative border-l-4 border-gray-300 pl-4">
          <div className="text-5xl font-bold text-[#D4E0FF]">205 +</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-2xl font-normal text-[#535353] uppercase">
              Available House
            </div>
          </div>
        </div>

        <div className="relative border-l-4 border-gray-300 pl-4">
          <div className="text-5xl font-bold text-[#D4E0FF]">92 +</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-2xl font-normal text-[#535353] p-2 uppercase">
              Happy Clients
            </div>
          </div>
        </div>

        <div className="relative border-l-4 border-gray-300 pl-4">
          <div className="text-5xl font-bold text-[#D4E0FF]">105 +</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-2xl font-normal text-[#535353] uppercase">
              Sold Properties
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dream