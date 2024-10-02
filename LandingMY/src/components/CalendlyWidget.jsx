import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyWidget = () => {
  return (
    <div className="flex justify-center mt-10">
      <InlineWidget 
        url="https://calendly.com/tulinkcalendly" 
        styles={{ height: '700px', width: '100%' }} // Ajustar el tamaño del widget
      />
    </div>
  );
};

export default CalendlyWidget