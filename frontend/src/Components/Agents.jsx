import React from 'react'
import client1 from "../assests/images/client1.png";
import client2 from "../assests/images/client2.png";
import client3 from "../assests/images/client3.png";
import client4 from "../assests/images/client4.png";

const Agents = () => {
    const clients = [
        {
          id: 1,
          img: client1,
          title: "Tom Wilson",
          description: "Marketing",
        },
        {
          id: 2,
          img: client2,
          title: "lilly potter",
          description: " service supporter",
        },
        {
          id: 3,
          img: client3,
          title: "Mukesh ambani",
          description: " agency",
        },
        {
          id: 4,
          img: client4,
          title: "john wick",
          description: "sales",
        },
      ];
  return (
    <div className=" p-5 mx-10">
    <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-poppins text-center mb-3 uppercase m-10">
      Meet our agents
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
      {clients.map((client) => (
        <div
          key={client.id}
          className="bg-white text-center pb-5 shadow-md rounded-lg"
        >
          <img
            src={client.img}
            alt={client.title}
            className="w-full h-64 object-cover mb-4 rounded-md"
          />
          <h2 className="text-2xl font-semibold mb-2 font-playfair">
            {client.title}
          </h2>
          <p className="text-sm text-gray-600 px-2 mb-4 font-playfair">
            {client.description}
          </p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Agents