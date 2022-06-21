import React from 'react';
import { Link } from 'react-router-dom';
import ProfileIcon from '../images/profileIcon.svg';

function ButtonProfile() {
  return (
    <Link to="/profile">
      <button
        type="button"
        data-testid="profile-top-btn"
        src={ ProfileIcon }
      >
        <img src={ ProfileIcon } alt="profile" />
      </button>
    </Link>
  );
}

export default ButtonProfile;
