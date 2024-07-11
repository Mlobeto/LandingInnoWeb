// src/components/LanguageSelector.js

import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <button onClick={() => changeLanguage('en')} className="bg-gray-200 px-2 py-1 rounded">EN</button>
      <button onClick={() => changeLanguage('es')} className="bg-gray-200 px-2 py-1 rounded">ES</button>
      <button onClick={() => changeLanguage('it')} className="bg-gray-200 px-2 py-1 rounded">IT</button>
    </div>
  );
};

export default LanguageSelector;
