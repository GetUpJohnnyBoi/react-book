import PropTypes from 'prop-types';
import CoffeeLogo from '../images/logo.svg';
import './Header.css';

function Header({ title }) {
  return (
    <header className="header-component">
      <img src={CoffeeLogo} alt="coffee-logo" />
      <h1>Bed and Second Breakfast</h1>
      &nbsp;
      <h2>{title}</h2>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
