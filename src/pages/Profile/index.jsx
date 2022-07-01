import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import titleGenerator from '../../services/titleGenerator';

import { UserEmail, UserButton, ButtonContainer } from './Profile.styled';

function Profile() {
  const location = useLocation();
  const { pathname } = location;
  const user = localStorage.getItem('user');
  const Email = () => {
    if (user !== null) {
      console.log('USERRRRR: ', user);
      const { email } = JSON.parse(user);
      return email;
    }
  };

  return (
    <>
      <Header title={ titleGenerator(pathname) } buttonProfile />
      <UserEmail
        data-testid="profile-email"
      >
        {Email()}

      </UserEmail>
      <ButtonContainer>
        <Link to="/done-recipes">
          <UserButton
            type="button"
            data-testid="profile-done-btn"
            value="Done Recipes"
            name="Done Recipes"
          >
            Done Recipes
          </UserButton>
        </Link>

        <Link to="/favorite-recipes">
          <UserButton
            type="button"
            data-testid="profile-favorite-btn"
            value="Favorite Recipes"
          >
            Favorite Recipes
          </UserButton>
        </Link>
        <Link to="/">
          <UserButton
            type="button"
            data-testid="profile-logout-btn"
            value="Logout"
            onClick={ () => localStorage.clear() }
          >
            Logout
          </UserButton>
        </Link>
      </ButtonContainer>

      <Footer />
    </>
  );
}

export default Profile;
