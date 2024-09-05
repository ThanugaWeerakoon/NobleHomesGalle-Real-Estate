import React from 'react'

const PropertySearch = () => {
  return (
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
            <div className="mt-6 flex justify-end">
              <button className="active:scale-95 rounded-lg bg-blue-600 px-14 py-2 font-medium text-white outline-none focus:ring hover:opacity-90">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default PropertySearch