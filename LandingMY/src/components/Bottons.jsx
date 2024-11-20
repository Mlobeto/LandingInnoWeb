import { useTranslation } from 'react-i18next';

const Bottons = () => {
  const { t } = useTranslation();
    return (
        <div>
        <div className= " dark:bg-customBlue flex flex-col items-center p-7 md:p-30">
          <h1 className="text-[30px] font-bold items-center  p-8 text-white">{t('Bottons.WhatCan')}</h1>
          
      </div>
      </div>
    )
  }
  
  export default Bottons