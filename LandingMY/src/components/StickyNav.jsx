import  { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const StickyNav = () => {
  const { t } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`bg-black bg-opacity-95 shadow-lg py-4 px-8 flex flex-col md:flex-row md:justify-between md:items-center border-b border-gray-800 ${isSticky ? 'fixed top-0 left-0 w-full z-50' : 'relative'}`}>
      <nav className="hidden md:flex space-x-6">
        <a href="#services" className="text-gray-300 hover:text-primary text-base font-medium transition">{t('StickyNav.overview')}</a>
        <a href="#about" className="text-gray-300 hover:text-primary text-base font-medium transition">{t('Header.Nosotros')}</a>
      </nav>
      <a
        href="#contact"
        className="w-full md:w-auto block md:inline ml-0 md:ml-4 bg-primary text-white py-3 px-6 rounded-full font-semibold shadow-lg hover:bg-white hover:text-black transition text-base text-center"
      >
        {t('StickyNav.request_demo')}
      </a>
    </div>
  );
};

export default StickyNav;


