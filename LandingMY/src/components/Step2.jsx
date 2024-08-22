import { useState } from "react";
import PropTypes from "prop-types";
import dominio from "../assets/dominio.png";
import hosting from "../assets/hosting.png";
import { useTranslation } from "react-i18next";

const Step2 = ({ onNext, onBack, totalCost }) => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState("");
  const [currentTotal, setCurrentTotal] = useState(totalCost);

  const handleOptionChange = (option, value) => {
    setSelectedOption(option);
    setCurrentTotal(totalCost + value);
    console.log("Option selected:", option);
    console.log("Value added:", value);
    console.log("Current total cost:", totalCost + value);
  };

  const handleSubmit = () => {
    const nextData = {
      option2: selectedOption === "option1" ? "Solo Dominio" : "Dominio y Hosting",
      totalCost: currentTotal,
    };
    console.log("Submitting data:", nextData);
    onNext(nextData);
  };

  console.log("Total cost at Step2 mount:", totalCost);

  return (
    <div className="flex flex-col items-center p-4 md:p-30">
      <h2 className="text-[40px] md:text-[40px] font-bold text-WHITE p-10">
        {t("Step2.title")}
      </h2>
      <h2 className="text-[20px] md:text-[20px] font-bold text-secondary p-4">{t('Step2.subtitle')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className={`p-6 border rounded-lg cursor-pointer ${
            selectedOption === "option1"
              ? "border-yellow-500 bg-blue-500"
              : "border-gray-300"
          }`}
          onClick={() => handleOptionChange("option1", 10)}
        >
          <div className="flex justify-center items-center">
            <img
              src={dominio}
              alt={t("Step2.HaveDomain")}
              className="object-cover"
              style={{ height: '300px', width: '300px' }}
            />
          </div>
          <p className="text-center mt-2">{t("Step2.HaveDomain")}</p>
        </div>
        <div
          className={`p-6 border rounded-lg cursor-pointer ${
            selectedOption === "option2"
              ? "border-yellow-500 bg-blue-500"
              : "border-gray-300"
          }`}
          onClick={() => handleOptionChange("option2", 85)}
        >
          <div className="flex justify-center items-center">
            <img
              src={hosting}
              alt={t("Step2.NeedHosting")}
              className="object-cover"
              style={{ height: '300px', width: '300px' }}
            />
          </div>
          <p className="text-center mt-2">{t("Step2.NeedHosting")}</p>
        </div>
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
          {t("Back")}
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-orange-500 text-white rounded-md"
          disabled={!selectedOption}
        >
          {t("Next")}
        </button>
      </div>
    </div>
  );
};

Step2.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  totalCost: PropTypes.number.isRequired,
};

export default Step2;






