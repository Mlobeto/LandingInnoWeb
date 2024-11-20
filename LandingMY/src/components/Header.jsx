import { useState } from 'react';
import Logo from '../assets/Logo.png';
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="flex items-center justify-between w-full p-4 h-[10vh] z-50 relative">
      <div className="xl:w-1/5 text-center">
        {/* Envolvemos el logo en un enlace */}
        <a href="/">
          <img src={Logo} alt="Logo" className="w-24 h-24 xl:static ml-12 mt-0 mb-8" />
        </a>
      </div>
      <div className="border-l-2 border-gray-300 h-12 mx-10"></div>
      <button onClick={() => setShowMenu(!showMenu)} className="text-2xl xl:hidden z-50">
        {showMenu ? <RiCloseLine /> : <RiMenuFill />}
      </button>
      <nav
        className={`fixed bg-white w-[70%] md:w-[30%] xl:w-full h-auto ${showMenu ? "top-28 right-20" : "-top-full right-20"
          } xl:static flex flex-col xl:flex-row items-center justify-center 
        gap-10 transition-all duration-500 z-40 p-3`}>
        <a href="#services" className="p-2" onClick={() => setShowMenu(false)}>
          {t('Header.Servicios')}
        </a>
        {/* <a href="#about" className="p-2" onClick={() => setShowMenu(false)}>
          {t('Header.Nosotros')}
        </a> */}
        <a href="#contact" className="p-2" onClick={() => setShowMenu(false)}>
          {t('Header.Contacto')}
        </a>
        <a href="#quote" className="p-2" onClick={() => setShowMenu(false)}>
          {t('Header.CotizaTuWeb')}
        </a>
      </nav>
    </header>
  );
}

export default Header;






