import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import agenda from "../assets/agenda.png";
import blog from "../assets/blog.png";
import cash from "../assets/cash.png";
import catalogo from "../assets/catalogo.png";
import dash from "../assets/dash.png";
import wa from "../assets/wa.png";
import delivery from "../assets/delivery.png";
import bot from "../assets/bot.png";

const Step3 = ({ onNext, onBack, totalCost }) => {
  const { t } = useTranslation();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [currentTotal, setCurrentTotal] = useState(totalCost);

  const options = [
    { id: 'option1', label: t('Step3.Blog'), image: blog, cost: 10 },
    { id: 'option2', label: t('Step3.Catalogo'), image: catalogo, cost: 20 },
    { id: 'option3', label: t('Step3.Delivery'), image: delivery, cost: 10 },
    { id: 'option4', label: t('Step3.Turnos'), image: agenda, cost: 20 },
    { id: 'option5', label: t('Step3.CRM'), image: dash, cost: 10 },
    { id: 'option6', label: t('Step3.Payments'), image: cash, cost: 20 },
    { id: 'option7', label: t('Step3.WhatsApp'), image: wa, cost: 10 },
    { id: 'option8', label: t('Step3.Bot'), image: bot, cost: 20 },
  ];

  const handleOptionChange = (optionId, cost) => {
    console.log('Option selected:', optionId);
    console.log('Cost:', cost);
    const newSelectedOptions = selectedOptions.includes(optionId)
      ? selectedOptions.filter(o => o !== optionId)
      : [...selectedOptions, optionId];

    console.log('New selected options:', newSelectedOptions);

    const newTotal = selectedOptions.includes(optionId)
      ? currentTotal - cost
      : currentTotal + cost;

    console.log('New total cost:', newTotal);

    setSelectedOptions(newSelectedOptions);
    setCurrentTotal(newTotal);
  };

  const handleSubmit = () => {
    console.log('Final selected options:', selectedOptions);
    console.log('Final total cost:', currentTotal);
    onNext({
      option3: selectedOptions.map(id => options.find(option => option.id === id).label),
      totalCost: currentTotal,
    });
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-[20px] md:text-[20px] font-bold text-secondary p-10">
        {t('Step3.title')}
      </h2>
      <h2 className="text-[20px] md:text-[20px] font-bold text-secondary p-4">{t('Step3.subtitle')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {options.map(option => (
          <div
            key={option.id}
            className={`p-4 border rounded-lg cursor-pointer ${selectedOptions.includes(option.id) ? 'border-yellow-500 bg-blue-500' : 'border-gray-300'}`}
            onClick={() => handleOptionChange(option.id, option.cost)}
          >
            <img src={option.image} alt={option.label} className="w-1/2 h-auto mx-auto" />
            <p className="text-center">{option.label}</p>
          </div>
        ))}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-4">
        <div
          className="bg-blue-500 h-2.5 rounded-full"
          style={{ width: `${(currentTotal / 1000) * 100}%` }}
        ></div>
      </div>
      <div className="flex mt-4 space-x-4">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
        >
          Atrás
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-orange-500 text-white rounded-md"
          disabled={selectedOptions.length === 0}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

Step3.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  totalCost: PropTypes.number.isRequired,
};

export default Step3;





