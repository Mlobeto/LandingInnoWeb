import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5492355517802" // Reemplaza con tu número de WhatsApp
  className="fixed bottom-20 right-4 md:bottom-8 md:right-8 bg-azul text-white rounded-full p-3 md:p-4 shadow-lg hover:bg-azul transition duration-300 transform hover:scale-110 hover:animate-bounce z-50 flex items-center justify-center"
      style={{ minWidth: '48px', minHeight: '48px' }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="w-7 h-7 md:w-10 md:h-10" />
    </a>
  );
}

export default WhatsAppButton;



