import React from 'react';
import ProfileIcon from '../images/profileIcon.svg';

function ButtonProfile() {
  return (
    <button
      type="button"
      data-testid="profile-top-btn"
      src={ ProfileIcon }
    >
      <img src={ ProfileIcon } alt="profile" />
    </button>
  );
}

export default ButtonProfile;
