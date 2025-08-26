import { useTranslation } from 'react-i18next';


const Works = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full flex flex-col items-center py-12 bg-black">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
        {t('Works.WeCreate')}
      </h2>
      <div className="h-1 w-24 bg-primary rounded-full mb-8"></div>
    </section>
  );
};

export default Works;

