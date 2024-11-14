import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactPageDown = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your service ID
        "YOUR_TEMPLATE_ID", // Replace with your template ID
        formData,
        "YOUR_USER_ID" // Replace with your user ID
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          alert("Your message was sent successfully!");
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("An error occurred. Please try again.");
        }
      );

    // Open WhatsApp to share details
    const whatsappMessage = `Hello! Here are the details:\n\nName: ${formData.name}\nSubject: ${formData.subject}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const whatsappURL = `https://wa.me/WHATSAPP_NUMBER?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="px-4 py-16 mx-auto w-full sm:px-24 lg:px-8 lg:py-20">
      <div className="relative w-full max-w-2xl mx-auto text-center">
        <h2 className="mt-20 font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
          LET’S MAKE SOMETHING NEW TOGETHER
        </h2>
      </div>

      <div className="lg:px-10 lg:py-5">
        <h2 className="mt-6 ml-10 font-sans text-1xl font-small tracking-tight text-[#7B7B7B] sm:text-2xl sm:leading-none">
          Let’s bring your vision to life with innovative, tailored solutions.
          At NobleHome, we’re dedicated to creating exceptional spaces that meet
          your unique needs and aspirations. Whether it’s a new home, an office
          space, or a commercial property, we’re here to guide you every step of
          the way. Together, let’s turn ideas into reality and build something
          remarkable.
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:space-x-10 mt-10">
        <div className="w-full lg:w-1/2">
          <div className="gmap-frame">
            <iframe
              width="100%"
              height="500"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=07%20R.G.%20Senanayake%20Mawatha,%20Colombo%2000700+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Google Maps"
            ></iframe>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#636363]"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-[#636363]"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#636363]"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#636363]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#6F97FF] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPageDown;
