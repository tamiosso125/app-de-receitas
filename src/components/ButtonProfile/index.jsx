import React from 'react';
import { Link } from 'react-router-dom';
import ProfileIcon from '../../images/profileIcon.svg';

import { ProfileButton, ProfileImage } from './ButtonProfile.styled';

function ButtonProfile() {
  return (
    <Link to="/profile">
      <ProfileButton
        type="button"
        data-testid="profile-top-btn"
        src={ ProfileIcon }
      >
        <ProfileImage src={ ProfileIcon } alt="profile" />
      </ProfileButton>
    </Link>
  );
}

export default ButtonProfile;
