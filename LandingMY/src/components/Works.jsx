import { useTranslation } from 'react-i18next';

const Works = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className= " dark:bg-blue-600 flex flex-col items-center p-6 md:p-30 mt-10">
        <h1 className="text-[30px] font-bold text-white">{t('Works.WeCreate')}</h1>
      </div>
    </div>
  );
};

export default Works;
