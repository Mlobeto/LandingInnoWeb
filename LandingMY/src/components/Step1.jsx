import { useState } from 'react';
import PropTypes from 'prop-types';
import institucional from "../assets/institucional.png";
import ecommerce from "../assets/ecommerce.png";
import LandingPage from "../assets/LandingPage.png";
import complex from "../assets/complex.png";
import { useTranslation } from 'react-i18next';

const Step1 = ({ onNext }) => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    onNext({ option1: selectedOption });
  };


  return (
    <div className="w-full flex flex-col items-center p-4 md:p-30">
    <div className="w-full  dark:bg-blue-600 flex flex-col items-center mb-5 p-3 md:p-30">
      <h2 className="text-[20px] font-bold items-center  p-2 text-white">{t('Step1.title')}
      </h2>
      </div>
      <h2 className="text-[20px] md:text-[20px] font-bold text-secondary p-4">{t('Step1.subtitle')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
           className={`p-4 border rounded-lg cursor-pointer transform transition duration-300 ${
            selectedOption === 'Institutional' ? 'border-yellow-500 bg-blue-500 scale-105' : 'border-gray-300'
          }`}
          onClick={() => handleOptionChange('Institutional')}
        >
          <img src={institucional} alt={t('Step1.Institucional')} className="w-full h-auto object-cover" />
          <p className="text-center mt-2">{t('Step1.Institucional')}</p>
        </div>
        <div
          className={`p-4 border rounded-lg cursor-pointer transform transition duration-300 ${selectedOption === 'ecommerce' ? 'border-yellow-500 bg-blue-500 scale-105' : 'border-gray-300'}`}
          onClick={() => handleOptionChange('ecommerce')}
        >
          <img src={ecommerce} alt={t('Step1.E-commerce')} className="w-full h-auto object-cover" />
          <p className="text-center mt-2">{t('Step1.E-commerce')}</p>
        </div>
        <div
          className={`p-4 border rounded-lg cursor-pointer ${selectedOption === 'Landing' ? 'border-yellow-500 bg-blue-500 scale-105' : 'border-gray-300'}`}
          onClick={() => handleOptionChange('Landing')}
        >
          <img src={LandingPage} alt={t('Step1.Landing')} className="w-full h-auto object-cover" />
          <p className="text-center mt-2">{t('Step1.Landing')}</p>
        </div>
        <div
          className={`p-4 border rounded-lg cursor-pointer ${selectedOption === 'Complex' ? 'border-yellow-500 bg-blue-100 scale-105' : 'border-gray-300'}`}
          onClick={() => handleOptionChange('Complex')}
        >
          <img src={complex} alt={t('Step1.Complejo')} className="w-full h-auto object-cover" />
          <p className="text-center mt-2">{t('Step1.Complejo')}</p>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="w-full mt-8 px-3 py-2 bg-orange-500 text-white rounded-md"
        disabled={!selectedOption}
      >
        {t('Step1.button')}
      </button>
    </div>
  );
};

Step1.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default Step1;






