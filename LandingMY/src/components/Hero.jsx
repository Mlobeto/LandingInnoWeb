import BackgroundImage from "../assets/hero.png"; 
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      className="bg-cover bg-center h-[85vh]"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="flex items-center h-full bg-black bg-opacity-60 px-6">
        <div className="text-left">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4 ml-8 drop-shadow-lg">
            {t('hero.title')}
          </h1>
          <p className="text-white text-3xl md:text-4xl font-bold mb-2 ml-8 drop-shadow-lg">
            {t('hero.subtitle1')}
          </p>
          <p className="text-white text-3xl md:text-4xl font-bold mb-6 ml-8 drop-shadow-lg">
            {t('hero.subtitle2')}
          </p>
          <div className="flex space-x-4">
            <a href="#contact" className="bg-blue-600 text-white px-8 py-4  ml-8 rounded-md text-xl font-semibold hover:bg-blue-700 shadow-lg transition duration-300">
              {t('hero.contact')}
            </a>
            <a href="#plans" className="bg-green-600 text-white px-8 py-4 rounded-md text-xl font-semibold hover:bg-green-700 shadow-lg transition duration-300">
              {t('hero.plans')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


