import whatsapImg from '../assests/fab/whatsap.png'
import instaImg from '../assests/fab/insta.png'
import FbImg from '../assests/fab/fb.png'

const Fab = () => {

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank"); // Replace with your WhatsApp number
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/yourusername", "_blank"); // Replace with your Instagram link
  };

  const handleFbClick = () => {
    window.open("https://www.facebook.com/yourprofile", "_blank"); // Replace with your Facebook link
  };

  return (
    <div className="fixed bottom-6 right-6 flex space-x-4">
      <button
        className=" rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition duration-200 ease-in-out"
        aria-label="WhatsApp"
        onClick={handleWhatsAppClick}
      >
        <img src={whatsapImg} alt="WhatsApp" className="w-14 h-14" />
      </button>

      <button
        className=" rounded-full w-16 h-16 flex items-center justify-center shadow-lg  transition duration-200 ease-in-out"
        aria-label="Instagram"
        onClick={handleInstagramClick}
      >
        <img src={instaImg} alt="WhatsApp" className="w-12 h-12" />
      </button>

      <button
        className="rounded-full w-16 h-16 flex items-center justify-center shadow-lg  transition duration-200 ease-in-out"
        aria-label="Facebook"
        onClick={handleFbClick}
      >
        <img src={FbImg} alt="Facebook" className="w-30 h-30" />
      </button>
    </div>
  );
};

export default Fab;
