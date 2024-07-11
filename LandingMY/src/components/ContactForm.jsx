import { forwardRef, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import jsPDF from 'jspdf';
import Logo from '../assets/LogoBlanco.png'; // Ajusta la ruta a tu logo

const ContactForm = forwardRef(({ quoteData, onBack }, ref) => {
  const { t } = useTranslation();
  const { option1, option2, option3, totalCost } = quoteData || {};

  const description = `
    Tipo De Página: ${option1 || "Item no Seleccionado"}, 
    Hosting: ${option2 || "Item no Seleccionado"}, 
    Integraciones: ${option3?.length > 0 ? option3.join(' -- ') : "Item no Seleccionado"}, 
    Costo total: $${totalCost || "Item no Seleccionado"}`;

  const formRef = useRef(null);

  const handleDownloadPDF = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a5'
    });
    const date = new Date().toLocaleDateString();

    // Agregar el logo
    const logo = new Image();
    logo.src = Logo;
    doc.addImage(logo, 'PNG', 10, 10, 20, 10); // Tamaño reducido del logo

    // Agregar fecha
    doc.setFontSize(10);
    doc.setTextColor(128, 128, 128); // Color gris
    doc.text(`Fecha: ${date}`, 110, 20);

    // Título
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0); // Color negro
    doc.text("Formulario de Contacto", 10, 35);

    // Detalles del presupuesto
    doc.setFontSize(10);
    doc.text(`Tipo De Página: ${option1 || "Item no Seleccionado"}`, 10, 45);
    doc.text(`Hosting: ${option2 || "Item no Seleccionado"}`, 10, 55);
    doc.text(`Integraciones: ${option3?.length > 0 ? option3.join(', ') : "Item no Seleccionado"}`, 10, 65);
    doc.text(`Costo total: $${totalCost || "Item no Seleccionado"}`, 10, 75);

    // Pie de página
    doc.setFontSize(8);
    doc.text("*Cotización basada en tu selección, comunícate con nosotros para solicitar una Demo.", 10, 140);

    // Guardar el PDF
    doc.save("cotizacion.pdf");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const formValues = Object.fromEntries(formData);

    formValues.description = description;

    try {
      const response = await fetch('https://landing-back-five.vercel.app/emails/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        handleDownloadPDF();
        alert('Formulario enviado con éxito');
      } else {
        alert('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el formulario');
    }
  };

  return (
    <div ref={ref} className="bg-white p-8 xl:p-20">
      <h2 className="text-xl font-bold mb-6">{t('ContactForm.title')}</h2>

      <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="firstName">
            {t('ContactForm.firstName')}
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="lastName">
            {t('ContactForm.familyname')}
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            {t('ContactForm.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
            {t('ContactForm.phone')}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700" htmlFor="comentario">
            {t('ContactForm.comentario')}
          </label>
          <input
            id="comentario"
            name="comentario"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700" htmlFor="description">
            {t('ContactForm.description')}
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            readOnly
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full mb-5 py-2 px-4 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            {t('ContactForm.downloadPdf')}
          </button>
        </div>
      </form>
      <button
        onClick={onBack}
        className="w-full py-2 px-4 bg-gray-300 text-white font-semibold rounded-md shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        {t('ContactForm.back')}
      </button>
    </div>
  );
});

ContactForm.propTypes = {
  quoteData: PropTypes.shape({
    option1: PropTypes.string,
    option2: PropTypes.string,
    option3: PropTypes.arrayOf(PropTypes.string),
    totalCost: PropTypes.number,
  }),
  onBack: PropTypes.func,
};

ContactForm.displayName = 'ContactForm';

export default ContactForm;












