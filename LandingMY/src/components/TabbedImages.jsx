
import { useState } from 'react';
import LandingPage from '../assets/sistema.png';
import catalogo from '../assets/web.png';
import institucional from '../assets/mantenimiento.png';
import complex from '../assets/diseño.png';
import blog from '../assets/escalabilidad.png';
import { useTranslation } from 'react-i18next';

const tabs = [
  {
    key: 'tab1',
    image: LandingPage,
    title: 'Landing Page',
    subtitle: 'Captura clientes con una web impactante.'
  },
  {
    key: 'tab2',
    image: catalogo,
    title: 'E-Commerce',
    subtitle: 'Vende online fácil y seguro.'
  },
  {
    key: 'tab3',
    image: institucional,
    title: 'Web Simple',
    subtitle: 'Presencia online rápida y profesional.'
  },
  {
    key: 'tab4',
    image: complex,
    title: 'Web Compleja',
    subtitle: 'Soluciones a medida para tu negocio.'
  },
  {
    key: 'tab5',
    image: blog,
    title: 'Escalabilidad',
    subtitle: 'Tu web crece con vos.'
  },
];

const TabbedImages = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const { t } = useTranslation();

  const current = tabs.find(tab => tab.key === activeTab);

  return (
    <section className="w-full flex flex-col items-center py-12 bg-black">
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={`px-4 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-200 border-2 ${activeTab === tab.key ? 'bg-primary text-white border-primary shadow-lg' : 'bg-gray-900 text-gray-400 border-gray-700 hover:bg-primary hover:text-white'}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {t(`TabbedImages.${tab.title.replace(/\s/g, '')}`, tab.title)}
          </button>
        ))}
      </div>
      <div className="w-full flex flex-col items-center md:flex-row md:space-x-8">
        <div className="md:w-1/2 flex justify-center mb-2 md:mb-0">
          <img src={current.image} alt={current.title} className="w-96 max-w-md h-auto rounded-2xl shadow-2xl border-4 border-gray-800" />
        </div>
        <div className="md:w-1/2 flex flex-col items-center md:items-start mt-0">
          <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-1 text-center md:text-left drop-shadow-2xl">
            {t(`TabbedImages.${current.title.replace(/\s/g, '')}`, current.title)}
          </h3>
          <p className="text-2xl md:text-3xl text-gray-100 text-center md:text-left mb-2 drop-shadow-lg font-semibold break-words whitespace-pre-line">
            {t(`TabbedImages.${current.title.replace(/\s/g, '')}Subtitle`, current.subtitle)}
          </p>
          <button
            onClick={() => {
              const calendly = document.getElementById('calendly-section');
              if (calendly) {
                calendly.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
            className="mt-2 px-7 py-3 bg-primary text-white rounded-full font-bold shadow-lg hover:bg-azul transition text-xl md:text-2xl text-center w-full md:w-auto"
          >
            Más Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default TabbedImages;







