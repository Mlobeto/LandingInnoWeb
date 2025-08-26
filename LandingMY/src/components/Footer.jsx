import Logo from '../assets/Logo.png';


const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 p-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <img
          src={Logo}
          alt="Logo"
          className="h-auto w-20 md:w-24 lg:w-28 xl:w-28"
        />
        <p className="text-gray-500 text-sm mt-4 md:mt-0">© {new Date().getFullYear()} Innoweb Solutions. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

