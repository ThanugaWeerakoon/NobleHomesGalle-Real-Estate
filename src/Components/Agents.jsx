import kanchana from '../assests/agent/kanchana.jpg';
import gallage from '../assests/agent/gallage.jpg';

const Agents = () => {
  const clients = [
    {
      id: 1,
      img: gallage,
      title: "Thilak Gallage",
      description: "Sales Manager",
    },
    {
      id: 2,
      img: kanchana,
      title: "Kanchana Lakmal",
      description: "Marketing Coordinator",
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen p-10 bg-gray-50">
      <div className="max-w-screen-md w-full space-y-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-poppins text-center uppercase">
          Meet our agents
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-white text-center pb-5 shadow-lg rounded-lg"
            >
              <img
                src={client.img}
                alt={client.title}
                className="w-full h-64 object-cover mb-4 rounded-t-md"
              />
              <h2 className="text-2xl font-semibold mb-2 font-playfair">
                {client.title}
              </h2>
              <p className="text-sm text-gray-600 px-4 mb-4 font-playfair">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agents;
