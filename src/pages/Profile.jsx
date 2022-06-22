import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  const user = localStorage.getItem('user');
  const { email } = JSON.parse(user);
  return (
    <>
      <Header title="Profile" buttonProfile />
      <h2
        data-testid="profile-email"
      >
        { email }

      </h2>
      <Link to="/done-recipes">
        <input
          type="button"
          data-testid="profile-done-btn"
          value="Done Recipes"
        />
      </Link>

      <Link to="/favorite-recipes">
        <input
          type="button"
          data-testid="profile-favorite-btn"
          value="Favorite Recipes"
        />
      </Link>
      <Link to="/">
        <input
          type="button"
          data-testid="profile-logout-btn"
          value="Logout"
          onClick={ () => localStorage.clear() }
        />
      </Link>

      <Footer />
    </>
  );
}

export default Profile;
