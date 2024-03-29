/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CoffeeLogo from '../images/logo.svg';
import './Header.css';

function Header({ title }) {
  return (
    <header className="header-component">
      <Link to="/">
        <img src={CoffeeLogo} alt="coffee-logo" />
        <h1>Second Bed and Breakfast</h1>
        <h2>{title}</h2>
      </Link>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
