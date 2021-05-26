import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const WelcomePage = (props) => {
  return (
    <div>
      <div>
        <Link to='/main'>Ir a main</Link>
      </div>
    </div>
  );
};

export default WelcomePage;
