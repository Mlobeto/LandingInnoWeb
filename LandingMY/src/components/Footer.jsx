import LogoBlanco from '../assets/LogoBlanco.png'; // Asegúrate de ajustar el path a tu logo

const Footer = () => {
  return (
    <footer className="bg-footer p-6 xl:p-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <img
          src={LogoBlanco}
          alt="Logo"
          className="h-auto w-32 md:w-40 lg:w-48 xl:w-56"
        />
      </div>
    </footer>
  );
};

export default Footer;

