//import React from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TopBar = ({ onConsultasClick }) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-end  items-center p-3  text-black">
      <div className="flex items-center">
        <span className="text-xl font-bold ml-8 mr-4">IS </span>
      </div>
      <div className="flex items-center space-x-4">
        {/* <Link to="/login" className="hover:underline">
          {t('TopBar.login')}
        </Link> */}
        <button onClick={onConsultasClick} className="hover:underline">
          {t('TopBar.consultas')}
        </button>
        
        
      </div>
    </div>
  );
};

TopBar.propTypes = {
  onConsultasClick: PropTypes.func.isRequired,
};

export default TopBar;




