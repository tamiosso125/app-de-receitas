import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function Foods(props) {
  const { location: { pathname } } = props;
  return (
    <Header title="Foods" buttonSearch buttonProfile route={ pathname } />
  );
}

Foods.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default Foods;
