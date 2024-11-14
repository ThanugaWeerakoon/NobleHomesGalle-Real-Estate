import building from "../assests/images/building.png";

const Dream = () => {
  return (
    <div className="relative mx-auto w-[80%] md:w-[70%] lg:w-[80%] xl:w-[50%] mb-20 transform  p-6 bg-white rounded-xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
        <h2 className="text-md font-semibold font-poppins text-[#193477] uppercase">
            ABOUT US
          </h2>
          <h1 className="text-4xl font-semibold font-poppins mb-3">
            To help you find your dream home
          </h1>
          <div>
            <h2 className="text-md font-semibold font-poppins text-[#6F97FF] uppercase">
              Our Vision
            </h2>
            <p className="text-[#535353] mb-5">
              To redefine real estate excellence by creating spaces that inspire
              and uplift. We envision a future where every client finds their
              ideal property seamlessly, with a commitment to quality,
              integrity, and personalized service. At NobleHome, we aim to set
              new standards in the real estate industry, making each client’s
              journey to their dream property an extraordinary experience.
            </p>
          </div>

          <div>
            <h2 className="text-md font-semibold font-poppins text-[#6F97FF] uppercase">
              Our Mission
            </h2>
            <p className="text-[#535353]">
              Our mission is to provide exceptional real estate services by
              focusing on our clients’ unique needs and aspirations. We are
              dedicated to building lasting relationships, offering expert
              guidance, and ensuring transparency in every transaction. With a
              passion for quality and a drive for innovation, NobleHome is
              committed to helping individuals and businesses find properties
              that truly reflect their goals and lifestyles.
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
  );
};

export default Dream;
