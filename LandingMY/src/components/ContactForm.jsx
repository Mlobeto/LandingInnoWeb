
import { forwardRef, useRef } from 'react';
import { useTranslation } from 'react-i18next';


import compuImg from '../assets/compu.png';
import { useState } from 'react';

const ContactForm = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);
    const formData = new FormData(formRef.current);
    const formValues = Object.fromEntries(formData);
    try {
      const response = await fetch('http://localhost:3001/emails/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });
      if (response.ok) {
        setSuccess(true);
        formRef.current.reset();
      } else {
        setError(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setError(true);
    }
  };

  return (
    <section ref={ref} className="w-full flex flex-col items-center py-10 bg-black">
      <div className="w-full max-w-5xl bg-gray-900 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Lado Izquierdo: Imagen y texto llamativo */}
        <div className="md:w-1/2 flex flex-col items-center justify-center bg-gradient-to-b from-primary/80 to-black p-8 md:p-12 text-center">
          <img src={compuImg} alt="Desarrollo de software" className="w-44 h-44 object-contain mb-6 drop-shadow-2xl" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-lg">¡Llevá tu empresa al siguiente nivel digital!</h2>
          <p className="text-lg md:text-2xl text-gray-200 font-semibold mb-2">Desarrollamos sistemas y sitios web a medida para potenciar tu negocio y atraer más clientes.</p>
          <p className="text-base text-gray-300">Completá el formulario y recibí una propuesta personalizada sin cargo.</p>
        </div>
        {/* Lado Derecho: Formulario */}
        <div className="md:w-1/2 flex flex-col justify-center p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">{t('ContactForm.title')}</h2>
          <div className="h-1 w-16 bg-primary rounded-full mb-6 mx-auto"></div>
          {success && (
            <div className="w-full mb-4">
              <div className="bg-green-600 text-white text-center py-2 rounded-lg font-semibold shadow-lg">
                {t('ContactForm.successMessage') || '¡Tu consulta fue enviada con éxito!'}
              </div>
            </div>
          )}
          {error && (
            <div className="w-full mb-4">
              <div className="bg-red-600 text-white text-center py-2 rounded-lg font-semibold shadow-lg">
                {t('ContactForm.errorMessage') || 'Ocurrió un error al enviar la consulta. Intenta nuevamente.'}
              </div>
            </div>
          )}
          <form ref={formRef} onSubmit={handleSubmit} className="w-full grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="firstName">
                  {t('ContactForm.firstName')}
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 p-3 block w-full bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-primary focus:border-primary sm:text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="lastName">
                  {t('ContactForm.familyname')}
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 p-3 block w-full bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-primary focus:border-primary sm:text-sm"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="email">
                {t('ContactForm.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-3 block w-full bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-primary focus:border-primary sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="phone">
                {t('ContactForm.phone')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 p-3 block w-full bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="comentario">
                {t('ContactForm.comentario')}
              </label>
              <textarea
                id="comentario"
                name="comentario"
                rows={4}
                className="mt-1 p-3 block w-full bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-primary focus:border-primary sm:text-sm"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-white hover:text-black transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                {t('ContactForm.send') || 'Enviar consulta'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});

ContactForm.displayName = 'ContactForm';

export default ContactForm;