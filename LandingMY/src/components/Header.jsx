import { useState } from 'react';
import Logo from '../assets/Logo.png';
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import { useTranslation } from 'react-i18next';


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="flex items-center justify-between w-full px-6 py-4 h-[10vh] z-50 relative bg-black border-b border-gray-800">
      <div className="xl:w-1/5 text-center">
        <img src={Logo} alt="Logo" className="w-28 h-auto xl:static ml-4 mt-1" />
      </div>
      <button onClick={() => setShowMenu(!showMenu)} className="text-2xl xl:hidden z-50 text-white">
        {showMenu ? <RiCloseLine /> : <RiMenuFill />}
      </button>
      <nav
        className={`fixed bg-black bg-opacity-95 w-[70%] md:w-[40%] xl:w-auto h-auto ${showMenu ? "top-20 right-0" : "-top-full right-0"}
          xl:static flex flex-col xl:flex-row items-center justify-center gap-8 transition-all duration-500 z-40 p-6 xl:p-0`}
      >
        <a href="#services" className="text-white text-lg font-medium hover:text-primary transition" onClick={() => setShowMenu(false)}>
          {t('Header.Servicios')}
        </a>
        <a href="#about" className="text-white text-lg font-medium hover:text-primary transition" onClick={() => setShowMenu(false)}>
          {t('Header.Nosotros')}
        </a>
        <a href="#contact" className="text-white text-lg font-medium hover:text-primary transition" onClick={() => setShowMenu(false)}>
          {t('Header.Contacto')}
        </a>
      </nav>
    </header>
  );
}

export default Header;






