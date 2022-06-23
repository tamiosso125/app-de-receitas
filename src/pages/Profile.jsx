import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import titleGenerator from '../services/titleGenerator';

function Profile(props) {
  const { location: { pathname } } = props;
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
      <h2
        data-testid="profile-email"
      >
        {Email()}

      </h2>
      <Link to="/done-recipes">
        <button
          type="button"
          data-testid="profile-done-btn"
          value="Done Recipes"
          name="Done Recipes"
        >
          Done Recipes
        </button>
      </Link>

      <Link to="/favorite-recipes">
        <button
          type="button"
          data-testid="profile-favorite-btn"
          value="Favorite Recipes"
        >
          Favorite Recipes
        </button>
      </Link>
      <Link to="/">
        <button
          type="button"
          data-testid="profile-logout-btn"
          value="Logout"
          onClick={ () => localStorage.clear() }
        >
          Logout
        </button>
      </Link>

      <Footer />
    </>
  );
}

Profile.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default Profile;
