import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5492355517802" // Reemplaza con tu número de WhatsApp
      className="fixed  right-4 bg-azul text-white rounded-full p-3 shadow-lg hover:bg-azul transition duration-300 transform hover:scale-110 hover:animate-bounce z-50 md:bottom-8 md:right-8"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="3x" />
    </a>
  );
}

export default WhatsAppButton;



