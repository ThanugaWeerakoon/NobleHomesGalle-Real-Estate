import home from "../assests/Home/home.jpg";

export const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${home})` }}
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
          <h2 className="mt-20 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Find Your New Property Today
            <br className="hidden md:block" />
            With Us.{" "}
          </h2>
          <p className="mb-6 text-base text-indigo-100 md:text-lg">
            Finding the home, commercial, or office you’ll love to rent or buy
            just got easier.
          </p>

          <a
            href="/"
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
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
      <div className="relative flex justify-center mt-8">
  <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      <select
        id="status"
        className="block w-full rounded-md border border-gray-200 px-4 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
      >
        <option>Property Type</option>
        <option>In Warehouse</option>
        <option>Being Brought In</option>
      </select>
      <select
        id="province"
        className="block w-full rounded-md border border-gray-200 px-4 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
      >
        <option>Province</option>
        <option>In Warehouse</option>
        <option>Being Brought In</option>
      </select>
      <select
        id="city"
        className="block w-full rounded-md border border-gray-200 px-4 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
      >
        <option>City</option>
        <option>In Warehouse</option>
        <option>Being Brought In</option>
      </select>
      <div className="flex flex-col col-span-1">
        <label
          htmlFor="min-price"
          className="text-stone-600 text-sm font-medium"
        >
          Min Sales Price
        </label>
        <input
          type="text"
          id="min-price"
          placeholder="Min Sales Price"
          className="mt-2 block w-full rounded-md border border-gray-200 px-4 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>
      <div className="flex flex-col col-span-1">
        <label
          htmlFor="max-price"
          className="text-stone-600 text-sm font-medium"
        >
          Max Sales Price
        </label>
        <input
          type="text"
          id="max-price"
          placeholder="Max Sales Price"
          className="mt-2 block w-full rounded-md border border-gray-200 px-4 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>
    </div>

    <div className="mt-6 flex justify-end">
      <button className="active:scale-95 rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90">
        Search
      </button>
    </div>
  </div>
</div>

    </div>
  );
};
