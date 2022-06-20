import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReceitasContext from './ReceitasContext';

function RecipesProvider({ children }) {
  const [urlAPI, setUrlAPI] = useState('');

  const context = {
    urlAPI,
    setUrlAPI,
  };
  return (
    <ReceitasContext.Provider value={ context }>
      {children}
    </ReceitasContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default RecipesProvider;
