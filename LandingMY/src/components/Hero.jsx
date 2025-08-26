import BackgroundImage from "../assets/fondo.png"; 
import { useTranslation } from 'react-i18next';


const Hero = () => {
  const { t } = useTranslation();
  return (
    <section
      className="relative bg-black bg-cover bg-center h-[80vh] flex items-center justify-center"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)), url(${BackgroundImage})` }}
    >
      <div className="flex flex-col items-center justify-center w-full h-full px-6">
        <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-6 text-center tracking-tight drop-shadow-xl">
          {t('hero.title')}
        </h1>
        <p className="text-gray-300 text-2xl md:text-3xl font-light mb-4 text-center max-w-2xl">
          {t('hero.subtitle1')}
        </p>
        <p className="text-gray-400 text-xl md:text-2xl font-normal mb-8 text-center max-w-2xl">
          {t('hero.subtitle2')}
        </p>
        <a href="#contact" className="bg-white text-black px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-primary hover:text-white transition duration-300">
          {t('hero.contact')}
        </a>
      </div>
    </section>
  );
};

export default Hero;
