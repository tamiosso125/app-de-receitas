import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function ShareButton({ index, type, id }) {
  const [linkCopied, setLinkCopied] = useState(false);
  const copyLink = () => {
    setLinkCopied(true);
    const pathLink = `http://localhost:3000/${type}s/${id}`;
    copy(pathLink);
  };
  return (
    <>
      <button
        data-testid={ `${index}-horizontal-share-btn` }
        type="button"
        src={ shareIcon }
        onClick={ copyLink }
      >
        <img src={ shareIcon } alt="share Icon" />
      </button>
      {linkCopied && <p>Link copied!</p>}
    </>
  );
}

ShareButton.propTypes = {
  index: PropTypes.number,
  type: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default ShareButton;
