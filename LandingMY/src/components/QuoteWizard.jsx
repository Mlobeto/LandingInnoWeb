import { useState } from 'react';
import PropTypes from 'prop-types';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const QuoteWizard = ({ setQuoteData }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    option1: '',
    option2: '',
    option3: [],
    totalCost: 0,
  });

  const handleNext = (data) => {
    const updatedData = { ...formData, ...data };

    // Calculate total cost based on selected options
    let totalCost = 0;

    // Step 1 costs
    switch (updatedData.option1) {
      case 'Institutional':
        totalCost += 200;
        break;
      case 'ecommerce':
        totalCost += 250;
        break;
      case 'Landing':
        totalCost += 150;
        break;
      case 'Complex':
        totalCost += 300;
        break;
      default:
        break;
    }

    // Step 2 costs
    switch (updatedData.option2) {
      case 'Solo Dominio':
        totalCost += 10;
        break;
      case 'Dominio y Hosting':
        totalCost += 85;
        break;
      default:
        break;
    }

    // Step 3 costs
    totalCost += updatedData.option3.reduce((acc, option) => {
      switch (option) {
        case 'Payments':
        case 'Whatsapp':
        case 'Catalog':
          acc += 80; 
          break;
        default:
          break;
      }
      return acc;
    }, 0);

    updatedData.totalCost = totalCost;
    console.log('Updated formData:', updatedData);
    setFormData(updatedData); // Update formData state
    setQuoteData(updatedData); // Pass updated data to parent component

    setCurrentStep(currentStep + 1); // Move to next step
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  console.log('Current step:', currentStep);
  console.log('Form data:', formData);

  return (
    <div className="w-full p-9">
      {currentStep === 1 && <Step1 onNext={handleNext} />}
      {currentStep === 2 && <Step2 onNext={handleNext} onBack={handleBack} totalCost={formData.totalCost} />}
      {currentStep === 3 && (
        <Step3
          onNext={handleNext}
          onBack={handleBack}
          totalCost={formData.totalCost}
          selectedOptions={formData.option3}
        />
      )}
    </div>
  );
};

QuoteWizard.propTypes = {
  setQuoteData: PropTypes.func.isRequired,
};

export default QuoteWizard;












