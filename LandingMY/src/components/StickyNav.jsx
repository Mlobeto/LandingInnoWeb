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
    <div className={`bg-white shadow-md py-4 px-8 flex justify-start items-center ${isSticky ? 'fixed top-0 left-0 w-full z-50' : 'relative'}`}>
      <nav className="flex space-x-4">
        <a href="#" className="text-gray-600 hover:text-gray-800 text-sm md:text-base">{t('StickyNav.overview')}</a>
             
      </nav>
      <a href="#contact" className="ml-4 md:ml-6 lg:ml-8 bg-gray-500 text-white py-2 px-4 rounded hover:bg-orange-600 text-sm md:text-base">{t('StickyNav.request_demo')}</a>
    </div>
  );
};

export default StickyNav;


